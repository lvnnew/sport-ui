/* eslint-disable max-len */
import * as React from 'react';
import {
  Resource,
} from 'react-admin';

import FileShow from './pages/files/FileShow';
import FileEdit from './pages/files/FileEdit';
import FileCreate from './pages/files/FileCreate';
import FileList from './pages/files/FileList';

import LanguageShow from './pages/languages/LanguageShow';
import LanguageEdit from './pages/languages/LanguageEdit';
import LanguageCreate from './pages/languages/LanguageCreate';
import LanguageList from './pages/languages/LanguageList';

import UserShow from './pages/users/UserShow';
import UserEdit from './pages/users/UserEdit';
import UserCreate from './pages/users/UserCreate';
import UserList from './pages/users/UserList';

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

import StatShow from './pages/stats/StatShow';
import StatEdit from './pages/stats/StatEdit';
import StatCreate from './pages/stats/StatCreate';
import StatList from './pages/stats/StatList';

import TagShow from './pages/tags/TagShow';
import TagEdit from './pages/tags/TagEdit';
import TagCreate from './pages/tags/TagCreate';
import TagList from './pages/tags/TagList';

import UnitShow from './pages/units/UnitShow';
import UnitEdit from './pages/units/UnitEdit';
import UnitCreate from './pages/units/UnitCreate';
import UnitList from './pages/units/UnitList';

// DO NOT EDIT! THIS IS GENERATED FILE

export const getResources = (permissions: string[]) => (
  permissions ?
    [
      <Resource
        key='files'
        name='files'
        show={permissions.includes('files.get') ? FileShow : undefined}
        edit={permissions.includes('files.update') ? FileEdit : undefined}
        create={permissions.includes('files.create') ? FileCreate : undefined}
        list={permissions.includes('files.all') ? FileList : undefined}
        options={{label: 'Files'}}
      />,
      <Resource
        key='languages'
        name='languages'
        show={permissions.includes('languages.get') ? LanguageShow : undefined}
        edit={permissions.includes('languages.update') ? LanguageEdit : undefined}
        create={permissions.includes('languages.create') ? LanguageCreate : undefined}
        list={permissions.includes('languages.all') ? LanguageList : undefined}
        options={{label: 'Languages'}}
      />,
      <Resource
        key='users'
        name='users'
        show={permissions.includes('users.get') ? UserShow : undefined}
        edit={permissions.includes('users.update') ? UserEdit : undefined}
        create={permissions.includes('users.create') ? UserCreate : undefined}
        list={permissions.includes('users.all') ? UserList : undefined}
        options={{label: 'Users'}}
      />,
      <Resource
        key='appLogins'
        name='appLogins'
        show={permissions.includes('appLogins.get') ? AppLoginShow : undefined}
        edit={permissions.includes('appLogins.update') ? AppLoginEdit : undefined}
        create={permissions.includes('appLogins.create') ? AppLoginCreate : undefined}
        list={permissions.includes('appLogins.all') ? AppLoginList : undefined}
        options={{label: 'Logins of usual (not admins) users'}}
      />,
      <Resource
        key='managers'
        name='managers'
        show={permissions.includes('managers.get') ? ManagerShow : undefined}
        edit={permissions.includes('managers.update') ? ManagerEdit : undefined}
        create={permissions.includes('managers.create') ? ManagerCreate : undefined}
        list={permissions.includes('managers.all') ? ManagerList : undefined}
        options={{label: 'Manager'}}
      />,
      <Resource
        key='managerLogins'
        name='managerLogins'
        show={permissions.includes('managerLogins.get') ? ManagerLoginShow : undefined}
        edit={permissions.includes('managerLogins.update') ? ManagerLoginEdit : undefined}
        create={permissions.includes('managerLogins.create') ? ManagerLoginCreate : undefined}
        list={permissions.includes('managerLogins.all') ? ManagerLoginList : undefined}
        options={{label: 'Manager logins'}}
      />,
      <Resource
        key='roles'
        name='roles'
        show={permissions.includes('roles.get') ? RoleShow : undefined}
        edit={permissions.includes('roles.update') ? RoleEdit : undefined}
        create={permissions.includes('roles.create') ? RoleCreate : undefined}
        list={permissions.includes('roles.all') ? RoleList : undefined}
        options={{label: 'Roles'}}
      />,
      <Resource
        key='permissions'
        name='permissions'
        show={permissions.includes('permissions.get') ? PermissionShow : undefined}
        edit={permissions.includes('permissions.update') ? PermissionEdit : undefined}
        create={permissions.includes('permissions.create') ? PermissionCreate : undefined}
        list={permissions.includes('permissions.all') ? PermissionList : undefined}
        options={{label: 'Permissions'}}
      />,
      <Resource
        key='rolesToPermissions'
        name='rolesToPermissions'
        show={permissions.includes('rolesToPermissions.get') ? RolesToPermissionShow : undefined}
        edit={permissions.includes('rolesToPermissions.update') ? RolesToPermissionEdit : undefined}
        create={permissions.includes('rolesToPermissions.create') ? RolesToPermissionCreate : undefined}
        list={permissions.includes('rolesToPermissions.all') ? RolesToPermissionList : undefined}
        options={{label: 'Roles To Permissions'}}
      />,
      <Resource
        key='managersToRoles'
        name='managersToRoles'
        show={permissions.includes('managersToRoles.get') ? ManagersToRoleShow : undefined}
        edit={permissions.includes('managersToRoles.update') ? ManagersToRoleEdit : undefined}
        create={permissions.includes('managersToRoles.create') ? ManagersToRoleCreate : undefined}
        list={permissions.includes('managersToRoles.all') ? ManagersToRoleList : undefined}
        options={{label: 'Managers To Roles'}}
      />,
      <Resource
        key='stats'
        name='stats'
        show={permissions.includes('stats.get') ? StatShow : undefined}
        edit={permissions.includes('stats.update') ? StatEdit : undefined}
        create={permissions.includes('stats.create') ? StatCreate : undefined}
        list={permissions.includes('stats.all') ? StatList : undefined}
        options={{label: 'Stats'}}
      />,
      <Resource
        key='tags'
        name='tags'
        show={permissions.includes('tags.get') ? TagShow : undefined}
        edit={permissions.includes('tags.update') ? TagEdit : undefined}
        create={permissions.includes('tags.create') ? TagCreate : undefined}
        list={permissions.includes('tags.all') ? TagList : undefined}
        options={{label: 'Tags'}}
      />,
      <Resource
        key='units'
        name='units'
        show={permissions.includes('units.get') ? UnitShow : undefined}
        edit={permissions.includes('units.update') ? UnitEdit : undefined}
        create={permissions.includes('units.create') ? UnitCreate : undefined}
        list={permissions.includes('units.all') ? UnitList : undefined}
        options={{label: 'Units'}}
      />,
    ] :
    []
);
