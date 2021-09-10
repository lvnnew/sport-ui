import * as React from 'react';
import {
  forwardRef,
} from 'react';
import {
  AppBar, UserMenu, MenuItemLink, useTranslate,
} from 'react-admin';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import {
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

// DO NOT EDIT! THIS IS GENERATED FILE

const useStyles = makeStyles((theme: Theme) => ({
  spacer: {
    flex: 1,
  },
  title: {
    flex: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  centerTitle: {
    color: theme.palette.primary.main,
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

const CustomAppBar = (props: any) => {
  const classes = useStyles();

  return (
    <AppBar {...props} elevation={1} userMenu={<CustomUserMenu />}>
      <Typography
        className={classes.title}
        color='inherit'
        id='react-admin-title'
        variant='h6'
      />
      <Typography
        className={classes.centerTitle}
        color='inherit'
        id='react-admin-title'
        variant='h6'
      >
        Agro Platform
      </Typography>
      <span className={classes.spacer} />
    </AppBar>
  );
};

export default CustomAppBar;
