import * as React from 'react';
import {AppBar as RaAppBar, ToggleThemeButton, LocalesMenuButton} from 'react-admin';
import {Box, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import {darkTheme, lightTheme} from './themes';
import UserMenu from './UserMenu/UserMenu';

// DO NOT EDIT! THIS IS GENERATED FILE

const AppBar = (props: any) => (
  <RaAppBar
    sx={{
      '& .RaAppBar-title': {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      },
    }}
    {...props}
    elevation={1}
    color='secondary'
    userMenu={<UserMenu />}
  >
    <Typography
      variant='h6'
      color='inherit'
      id='react-admin-title'
    />
    <Box flex={1} />
    <Typography
      sx={{color: 'primary.main'}}
      color='inherit'
      id='react-admin-title'
      variant='h6'
    >
      <Link
        to='/'
        style={{textDecoration: 'none', color: 'inherit'}}
      >
        Meta Template Base
      </Link>
    </Typography>
    <Box flex={1} />
    <ToggleThemeButton
      lightTheme={lightTheme}
      darkTheme={darkTheme}
    />
    <LocalesMenuButton
      languages={[
        {locale: 'ru', name: 'Russian'},
        {locale: 'en', name: 'English'},
      ]}
    />
  </RaAppBar>
);

export default AppBar;
