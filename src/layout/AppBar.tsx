import * as React from 'react';
import {
  forwardRef,
} from 'react';
import {
  AppBar as MuiAppBar,
  UserMenu,
  MenuItemLink,
  useTranslate,
} from 'react-admin';
import {Typography} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import {makeStyles, createStyles} from '@material-ui/core/styles';

// DO NOT EDIT! THIS IS GENERATED FILE

const useStyles = makeStyles(() => createStyles({
  spacer: {
    flex: 1,
  },
  title: {
    flex: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
}));

const ConfigurationMenu = forwardRef<any, any>((props, ref) => {
  const translate = useTranslate();

  return (
    <MenuItemLink
      leftIcon={<SettingsIcon />}
      onClick={props.onClick}
      primaryText={translate('app.configuration')}
      ref={ref}
      sidebarIsOpen
      to='/configuration'
    />
  );
});

const CustomUserMenu = (props: any) => (
  <UserMenu {...props}>
    <ConfigurationMenu />
  </UserMenu>
);

const AppBar = (props: any) => {
  const classes = useStyles();

  return (
    <MuiAppBar {...props} elevation={1} userMenu={<CustomUserMenu />}>
      <Typography
        className={classes.title}
        color='inherit'
        id='react-admin-title'
        variant='h6'
      />
      <Typography
        // sx={{color: 'primary.main'}}
        color='inherit'
        id='react-admin-title'
        variant='h6'
      >
        Agro Platform
      </Typography>
      <span className={classes.spacer} />
    </MuiAppBar>
  );
};

export default AppBar;
