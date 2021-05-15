/* eslint-disable max-len */
import * as React from 'react';
import {
  Resource,
} from 'react-admin';

import UserShow from './pages/users/UserShow';
import UserEdit from './pages/users/UserEdit';
import UserCreate from './pages/users/UserCreate';
import UserList from './pages/users/UserList';

import AdminShow from './pages/admins/AdminShow';
import AdminEdit from './pages/admins/AdminEdit';
import AdminCreate from './pages/admins/AdminCreate';
import AdminList from './pages/admins/AdminList';

import AppLoginShow from './pages/appLogins/AppLoginShow';
import AppLoginEdit from './pages/appLogins/AppLoginEdit';
import AppLoginCreate from './pages/appLogins/AppLoginCreate';
import AppLoginList from './pages/appLogins/AppLoginList';

import AdminLoginShow from './pages/adminLogins/AdminLoginShow';
import AdminLoginEdit from './pages/adminLogins/AdminLoginEdit';
import AdminLoginCreate from './pages/adminLogins/AdminLoginCreate';
import AdminLoginList from './pages/adminLogins/AdminLoginList';

import StatShow from './pages/stats/StatShow';
import StatEdit from './pages/stats/StatEdit';
import StatCreate from './pages/stats/StatCreate';
import StatList from './pages/stats/StatList';

import TagShow from './pages/tags/TagShow';
import TagEdit from './pages/tags/TagEdit';
import TagCreate from './pages/tags/TagCreate';
import TagList from './pages/tags/TagList';

// DO NOT EDIT! THIS IS GENERATED FILE

export const agrResources = [
  <Resource show={UserShow} edit={UserEdit} create={UserCreate} key='users' list={UserList} name='users' options={{label: 'Users'}} />,
  <Resource show={AdminShow} edit={AdminEdit} create={AdminCreate} key='admins' list={AdminList} name='admins' options={{label: 'Admins'}} />,
  <Resource show={AppLoginShow} edit={AppLoginEdit} create={AppLoginCreate} key='appLogins' list={AppLoginList} name='appLogins' options={{label: 'Logins of usual (not admins) users'}} />,
  <Resource show={AdminLoginShow} edit={AdminLoginEdit} create={AdminLoginCreate} key='adminLogins' list={AdminLoginList} name='adminLogins' options={{label: 'Admin logins'}} />,
  <Resource show={StatShow} edit={StatEdit} create={StatCreate} key='stats' list={StatList} name='stats' options={{label: 'Stats'}} />,
  <Resource show={TagShow} edit={TagEdit} create={TagCreate} key='tags' list={TagList} name='tags' options={{label: 'Tags'}} />,
];
