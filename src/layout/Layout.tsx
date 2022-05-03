import * as React from 'react';
import {Layout as RaLayout, LayoutProps} from 'react-admin';
import AppBar from './AppBar';
import Menu from './Menu';

const Layout = (props: LayoutProps) => (<RaLayout {...props} appBar={AppBar} menu={Menu} />);

export default Layout;
