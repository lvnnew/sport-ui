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

import RoleShow from './pages/roles/RoleShow';
import RoleEdit from './pages/roles/RoleEdit';
import RoleCreate from './pages/roles/RoleCreate';
import RoleList from './pages/roles/RoleList';

import PermissionShow from './pages/permissions/PermissionShow';
import PermissionEdit from './pages/permissions/PermissionEdit';
import PermissionCreate from './pages/permissions/PermissionCreate';
import PermissionList from './pages/permissions/PermissionList';

import RolesToPermissionShow from './pages/rolesToPermissions/RolesToPermissionShow';
import RolesToPermissionEdit from './pages/rolesToPermissions/RolesToPermissionEdit';
import RolesToPermissionCreate from './pages/rolesToPermissions/RolesToPermissionCreate';
import RolesToPermissionList from './pages/rolesToPermissions/RolesToPermissionList';

import ManagersToRoleShow from './pages/managersToRoles/ManagersToRoleShow';
import ManagersToRoleEdit from './pages/managersToRoles/ManagersToRoleEdit';
import ManagersToRoleCreate from './pages/managersToRoles/ManagersToRoleCreate';
import ManagersToRoleList from './pages/managersToRoles/ManagersToRoleList';

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
  <Resource show={RoleShow} edit={RoleEdit} create={RoleCreate} key='roles' list={RoleList} name='roles' options={{label: 'Roles'}} />,
  <Resource show={PermissionShow} edit={PermissionEdit} create={PermissionCreate} key='permissions' list={PermissionList} name='permissions' options={{label: 'Permissions'}} />,
  <Resource show={RolesToPermissionShow} edit={RolesToPermissionEdit} create={RolesToPermissionCreate} key='rolesToPermissions' list={RolesToPermissionList} name='rolesToPermissions' options={{label: 'Roles To Permissions'}} />,
  <Resource show={ManagersToRoleShow} edit={ManagersToRoleEdit} create={ManagersToRoleCreate} key='managersToRoles' list={ManagersToRoleList} name='managersToRoles' options={{label: 'Managers To Roles'}} />,
  <Resource show={ManagerLoginShow} edit={ManagerLoginEdit} create={ManagerLoginCreate} key='managerLogins' list={ManagerLoginList} name='managerLogins' options={{label: 'Manager logins'}} />,
  <Resource show={StatShow} edit={StatEdit} create={StatCreate} key='stats' list={StatList} name='stats' options={{label: 'Stats'}} />,
  <Resource show={TagShow} edit={TagEdit} create={TagCreate} key='tags' list={TagList} name='tags' options={{label: 'Tags'}} />,
];
