import * as React from 'react';
import {Layout as RaLayout, LayoutProps, CheckForApplicationUpdate} from 'react-admin';
import {ReactQueryDevtools} from 'react-query/devtools';
import AppBar from './AppBar';
import Menu from './Menu';

const Layout = (props: LayoutProps) => {
  return (
    <>
      <RaLayout {...props} appBar={AppBar} menu={Menu} />
      <ReactQueryDevtools initialIsOpen={false} />
      <CheckForApplicationUpdate />
    </>
  );
};

export default Layout;
