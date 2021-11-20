import * as React from 'react';
import {
  FC,
} from 'react';
import {
  useSelector,
} from 'react-redux';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  useMediaQuery, Theme,
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
import {makeStyles} from '@material-ui/core/styles';
import classnames from 'classnames';
import {hasPermission} from '../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
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
    onMenuClick: () => void;
}

const Menu: FC<Props> = ({onMenuClick, dense, logout}) => {
  const translate = useTranslate();
  const classes = useStyles();
  const isXSmall = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('xs'),
  );
  const open = useSelector((state: AppState) => state.admin.ui.sidebarOpen);
  useSelector((state: AppState) => state.theme); // force rerender on theme change
  const {permissions} = usePermissions<string[]>();

  return (
    <div
      className={classnames(classes.root, {
        [classes.open]: open,
        [classes.closed]: !open,
      })}
    >
      {hasPermission(permissions, 'dashboards.main') && <DashboardMenuItem onClick={onMenuClick} sidebarIsOpen={open} />}
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
    </div>
  );
};

export default Menu;
