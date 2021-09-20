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
  useTranslate,
  DashboardMenuItem,
  MenuItemLink,
  usePermissions,
} from 'react-admin';
import {
  AppState,
} from '../types';
import {
  ProjectMenu,
} from '../adm/ProjectMenu';

// DO NOT EDIT! THIS IS GENERATED FILE

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
  const {permissions} = usePermissions<string[]>();

  return (
    <Box mt={1}>
      {' '}
      {permissions && permissions.includes('dashboards.main') && <DashboardMenuItem onClick={onMenuClick} sidebarIsOpen={open} />}
      <ProjectMenu dense={dense} onMenuClick={onMenuClick} open={open} />
      {isXSmall && (
        <MenuItemLink
          dense={dense}
          leftIcon={<SettingsIcon />}
          onClick={onMenuClick}
          primaryText={translate('app.configuration')}
          sidebarIsOpen={open}
          to='/configuration'
        />
      )}
      {isXSmall && logout}
    </Box>
  );
};

export default Menu;
