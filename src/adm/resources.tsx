/* eslint-disable max-len */
import * as React from 'react';
import {
  Resource,
} from 'react-admin';

import FileShow from './pages/files/FileShow';
import FileEdit from './pages/files/FileEdit';
import FileCreate from './pages/files/FileCreate';
import FileList from './pages/files/FileList';

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

import ManagerShow from './pages/managers/ManagerShow';
import ManagerEdit from './pages/managers/ManagerEdit';
import ManagerCreate from './pages/managers/ManagerCreate';
import ManagerList from './pages/managers/ManagerList';

import ManagerLoginShow from './pages/managerLogins/ManagerLoginShow';
import ManagerLoginEdit from './pages/managerLogins/ManagerLoginEdit';
import ManagerLoginCreate from './pages/managerLogins/ManagerLoginCreate';
import ManagerLoginList from './pages/managerLogins/ManagerLoginList';

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
  <Resource show={FileShow} edit={FileEdit} create={FileCreate} key='files' list={FileList} name='files' options={{label: 'Files'}} />,
  <Resource show={UserShow} edit={UserEdit} create={UserCreate} key='users' list={UserList} name='users' options={{label: 'Users'}} />,
  <Resource show={AdminShow} edit={AdminEdit} create={AdminCreate} key='admins' list={AdminList} name='admins' options={{label: 'Admins'}} />,
  <Resource show={AppLoginShow} edit={AppLoginEdit} create={AppLoginCreate} key='appLogins' list={AppLoginList} name='appLogins' options={{label: 'Logins of usual (not admins) users'}} />,
  <Resource show={ManagerShow} edit={ManagerEdit} create={ManagerCreate} key='managers' list={ManagerList} name='managers' options={{label: 'Manager'}} />,
  <Resource show={ManagerLoginShow} edit={ManagerLoginEdit} create={ManagerLoginCreate} key='managerLogins' list={ManagerLoginList} name='managerLogins' options={{label: 'Manager logins'}} />,
  <Resource show={StatShow} edit={StatEdit} create={StatCreate} key='stats' list={StatList} name='stats' options={{label: 'Stats'}} />,
  <Resource show={TagShow} edit={TagEdit} create={TagCreate} key='tags' list={TagList} name='tags' options={{label: 'Tags'}} />,
];
