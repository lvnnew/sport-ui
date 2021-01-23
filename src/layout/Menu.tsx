import * as React from 'react';
import {
  FC,
} from 'react';
import {
  useSelector,
} from 'react-redux';
import SettingsIcon from '@material-ui/icons/Settings';
import {
  useMediaQuery, Theme, Box,
} from '@material-ui/core';
import {
  useTranslate, DashboardMenuItem, MenuItemLink,
} from 'react-admin';

import {
  AppState,
} from '../types';
import {
  AgrSubMenu,
} from '../agr/SubMenu';

interface Props {
    dense: boolean;
    logout: () => void;
    onMenuClick: () => void;
}

const Menu: FC<Props> = ({onMenuClick, dense, logout}) => {
  const translate = useTranslate();
  const isXSmall = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('xs'),
  );
  const open = useSelector((state: AppState) => state.admin.ui.sidebarOpen);
  useSelector((state: AppState) => state.theme); // force rerender on theme change

  return (
    <Box mt={1}>
      {' '}
      <DashboardMenuItem onClick={onMenuClick} sidebarIsOpen={open} />
      <AgrSubMenu dense={dense} onMenuClick={onMenuClick} open={open} />
      {isXSmall && (
        <MenuItemLink
          dense={dense}
          leftIcon={<SettingsIcon />}
          onClick={onMenuClick}
          primaryText={translate('pos.configuration')}
          sidebarIsOpen={open}
          to='/configuration'
        />
      )}
      {isXSmall && logout}
    </Box>
  );
};

export default Menu;
