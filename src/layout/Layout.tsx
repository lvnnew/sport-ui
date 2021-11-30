import * as React from 'react';
import {
  useSelector,
} from 'react-redux';
import {
  Layout, Sidebar,
} from 'react-admin';
import AppBar from './AppBar';
import Menu from './Menu';
import {
  darkThemeOptions,
  lightThemeOptions,
  darkTheme,
  lightTheme,
} from './themes';
import {
  AppState,
} from '../types';
import {ThemeProvider} from '@mui/material';

const CustomSidebar = (props: any) => <Sidebar {...props} size={200} />;

export default (props: any) => {
  const themeOptions = useSelector((state: AppState) =>
    (state.theme === 'dark' ? darkThemeOptions : lightThemeOptions),
  );
  const theme = useSelector((state: AppState) =>
    (state.theme === 'dark' ? darkTheme : lightTheme),
  );

  return (
    <ThemeProvider theme={theme}>
      <Layout
        {...props}
        appBar={AppBar}
        menu={Menu}
        sidebar={CustomSidebar}
        theme={themeOptions}
      />
    </ThemeProvider>
  );
};
