import * as React from 'react';
import {
  FC,
} from 'react';
import {
  useSelector,
} from 'react-redux';
import SettingsIcon from '@material-ui/icons/Settings';
import {
  // eslint-disable-next-line import/no-deprecated
  useMediaQuery, Box, useTheme,
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
import {makeStyles, createStyles} from '@material-ui/core/styles';
import classnames from 'classnames';
import {hasPermission} from '../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const useStyles = makeStyles(() => createStyles({
  root: {
    transition: 'width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;',
  },
  open: {
    width: 240,
  },
  closed: {
    width: 55,
  },
}));

interface Props {
    dense: boolean;
    logout: () => void;
    onClick: () => void;
}

const Menu: FC<Props> = ({onClick, dense, logout}) => {
  const translate = useTranslate();
  const classes = useStyles();
  const theme = useTheme();
  // eslint-disable-next-line import/no-deprecated
  const isXSmall = useMediaQuery(theme.breakpoints.down('xs'));
  const open = useSelector((state: AppState) => state.admin.ui.sidebarOpen);
  useSelector((state: AppState) => state.theme); // force rerender on theme change
  const {permissions} = usePermissions<string[]>();

  return (
    <Box
      className={classnames(classes.root, {
        [classes.open]: open,
        [classes.closed]: !open,
      })}
      // sx={{marginTop: 1, marginBottom: 1}}
      style={{marginTop: 8, marginBottom: 8}}
    >
      {hasPermission(permissions, 'dashboards.main') && <DashboardMenuItem onClick={onClick} sidebarIsOpen={open} />}
      <ProjectMenu dense={dense} onClick={onClick} open={open} />
      {isXSmall && (
        <MenuItemLink
          dense={dense}
          leftIcon={<SettingsIcon />}
          onClick={onClick}
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
