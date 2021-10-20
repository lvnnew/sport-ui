/* eslint-disable max-len */
import * as React from 'react';
import {
  Resource,
} from 'react-admin';

import Loadable from 'react-loadable';

const LoadableAppLoginShow = Loadable({
  loader: () => import('./pages/appLogins/AppLoginShow'),
  loading: () => null,
});
const LoadableAppLoginEdit = Loadable({
  loader: () => import('./pages/appLogins/AppLoginEdit'),
  loading: () => null,
});
const LoadableAppLoginCreate = Loadable({
  loader: () => import('./pages/appLogins/AppLoginCreate'),
  loading: () => null,
});
const LoadableAppLoginList = Loadable({
  loader: () => import('./pages/appLogins/AppLoginList'),
  loading: () => null,
});
const LoadableAuditLogShow = Loadable({
  loader: () => import('./pages/auditLogs/AuditLogShow'),
  loading: () => null,
});
const LoadableAuditLogEdit = Loadable({
  loader: () => import('./pages/auditLogs/AuditLogEdit'),
  loading: () => null,
});
const LoadableAuditLogCreate = Loadable({
  loader: () => import('./pages/auditLogs/AuditLogCreate'),
  loading: () => null,
});
const LoadableAuditLogList = Loadable({
  loader: () => import('./pages/auditLogs/AuditLogList'),
  loading: () => null,
});
const LoadableDelegationShow = Loadable({
  loader: () => import('./pages/delegations/DelegationShow'),
  loading: () => null,
});
const LoadableDelegationEdit = Loadable({
  loader: () => import('./pages/delegations/DelegationEdit'),
  loading: () => null,
});
const LoadableDelegationCreate = Loadable({
  loader: () => import('./pages/delegations/DelegationCreate'),
  loading: () => null,
});
const LoadableDelegationList = Loadable({
  loader: () => import('./pages/delegations/DelegationList'),
  loading: () => null,
});
const LoadableFileShow = Loadable({
  loader: () => import('./pages/files/FileShow'),
  loading: () => null,
});
const LoadableFileEdit = Loadable({
  loader: () => import('./pages/files/FileEdit'),
  loading: () => null,
});
const LoadableFileCreate = Loadable({
  loader: () => import('./pages/files/FileCreate'),
  loading: () => null,
});
const LoadableFileList = Loadable({
  loader: () => import('./pages/files/FileList'),
  loading: () => null,
});
const LoadableLanguageShow = Loadable({
  loader: () => import('./pages/languages/LanguageShow'),
  loading: () => null,
});
const LoadableLanguageEdit = Loadable({
  loader: () => import('./pages/languages/LanguageEdit'),
  loading: () => null,
});
const LoadableLanguageCreate = Loadable({
  loader: () => import('./pages/languages/LanguageCreate'),
  loading: () => null,
});
const LoadableLanguageList = Loadable({
  loader: () => import('./pages/languages/LanguageList'),
  loading: () => null,
});
const LoadableManagerLoginShow = Loadable({
  loader: () => import('./pages/managerLogins/ManagerLoginShow'),
  loading: () => null,
});
const LoadableManagerLoginEdit = Loadable({
  loader: () => import('./pages/managerLogins/ManagerLoginEdit'),
  loading: () => null,
});
const LoadableManagerLoginCreate = Loadable({
  loader: () => import('./pages/managerLogins/ManagerLoginCreate'),
  loading: () => null,
});
const LoadableManagerLoginList = Loadable({
  loader: () => import('./pages/managerLogins/ManagerLoginList'),
  loading: () => null,
});
const LoadableManagerShow = Loadable({
  loader: () => import('./pages/managers/ManagerShow'),
  loading: () => null,
});
const LoadableManagerEdit = Loadable({
  loader: () => import('./pages/managers/ManagerEdit'),
  loading: () => null,
});
const LoadableManagerCreate = Loadable({
  loader: () => import('./pages/managers/ManagerCreate'),
  loading: () => null,
});
const LoadableManagerList = Loadable({
  loader: () => import('./pages/managers/ManagerList'),
  loading: () => null,
});
const LoadableManagersToPermissionShow = Loadable({
  loader: () => import('./pages/managersToPermissions/ManagersToPermissionShow'),
  loading: () => null,
});
const LoadableManagersToPermissionEdit = Loadable({
  loader: () => import('./pages/managersToPermissions/ManagersToPermissionEdit'),
  loading: () => null,
});
const LoadableManagersToPermissionCreate = Loadable({
  loader: () => import('./pages/managersToPermissions/ManagersToPermissionCreate'),
  loading: () => null,
});
const LoadableManagersToPermissionList = Loadable({
  loader: () => import('./pages/managersToPermissions/ManagersToPermissionList'),
  loading: () => null,
});
const LoadableManagersToRoleShow = Loadable({
  loader: () => import('./pages/managersToRoles/ManagersToRoleShow'),
  loading: () => null,
});
const LoadableManagersToRoleEdit = Loadable({
  loader: () => import('./pages/managersToRoles/ManagersToRoleEdit'),
  loading: () => null,
});
const LoadableManagersToRoleCreate = Loadable({
  loader: () => import('./pages/managersToRoles/ManagersToRoleCreate'),
  loading: () => null,
});
const LoadableManagersToRoleList = Loadable({
  loader: () => import('./pages/managersToRoles/ManagersToRoleList'),
  loading: () => null,
});
const LoadableMessageTemplateShow = Loadable({
  loader: () => import('./pages/messageTemplates/MessageTemplateShow'),
  loading: () => null,
});
const LoadableMessageTemplateEdit = Loadable({
  loader: () => import('./pages/messageTemplates/MessageTemplateEdit'),
  loading: () => null,
});
const LoadableMessageTemplateCreate = Loadable({
  loader: () => import('./pages/messageTemplates/MessageTemplateCreate'),
  loading: () => null,
});
const LoadableMessageTemplateList = Loadable({
  loader: () => import('./pages/messageTemplates/MessageTemplateList'),
  loading: () => null,
});
const LoadablePermissionShow = Loadable({
  loader: () => import('./pages/permissions/PermissionShow'),
  loading: () => null,
});
const LoadablePermissionEdit = Loadable({
  loader: () => import('./pages/permissions/PermissionEdit'),
  loading: () => null,
});
const LoadablePermissionCreate = Loadable({
  loader: () => import('./pages/permissions/PermissionCreate'),
  loading: () => null,
});
const LoadablePermissionList = Loadable({
  loader: () => import('./pages/permissions/PermissionList'),
  loading: () => null,
});
const LoadableRoleShow = Loadable({
  loader: () => import('./pages/roles/RoleShow'),
  loading: () => null,
});
const LoadableRoleEdit = Loadable({
  loader: () => import('./pages/roles/RoleEdit'),
  loading: () => null,
});
const LoadableRoleCreate = Loadable({
  loader: () => import('./pages/roles/RoleCreate'),
  loading: () => null,
});
const LoadableRoleList = Loadable({
  loader: () => import('./pages/roles/RoleList'),
  loading: () => null,
});
const LoadableRolesToPermissionShow = Loadable({
  loader: () => import('./pages/rolesToPermissions/RolesToPermissionShow'),
  loading: () => null,
});
const LoadableRolesToPermissionEdit = Loadable({
  loader: () => import('./pages/rolesToPermissions/RolesToPermissionEdit'),
  loading: () => null,
});
const LoadableRolesToPermissionCreate = Loadable({
  loader: () => import('./pages/rolesToPermissions/RolesToPermissionCreate'),
  loading: () => null,
});
const LoadableRolesToPermissionList = Loadable({
  loader: () => import('./pages/rolesToPermissions/RolesToPermissionList'),
  loading: () => null,
});
const LoadableStatShow = Loadable({
  loader: () => import('./pages/stats/StatShow'),
  loading: () => null,
});
const LoadableStatEdit = Loadable({
  loader: () => import('./pages/stats/StatEdit'),
  loading: () => null,
});
const LoadableStatCreate = Loadable({
  loader: () => import('./pages/stats/StatCreate'),
  loading: () => null,
});
const LoadableStatList = Loadable({
  loader: () => import('./pages/stats/StatList'),
  loading: () => null,
});
const LoadableTagShow = Loadable({
  loader: () => import('./pages/tags/TagShow'),
  loading: () => null,
});
const LoadableTagEdit = Loadable({
  loader: () => import('./pages/tags/TagEdit'),
  loading: () => null,
});
const LoadableTagCreate = Loadable({
  loader: () => import('./pages/tags/TagCreate'),
  loading: () => null,
});
const LoadableTagList = Loadable({
  loader: () => import('./pages/tags/TagList'),
  loading: () => null,
});
const LoadableUnitShow = Loadable({
  loader: () => import('./pages/units/UnitShow'),
  loading: () => null,
});
const LoadableUnitEdit = Loadable({
  loader: () => import('./pages/units/UnitEdit'),
  loading: () => null,
});
const LoadableUnitCreate = Loadable({
  loader: () => import('./pages/units/UnitCreate'),
  loading: () => null,
});
const LoadableUnitList = Loadable({
  loader: () => import('./pages/units/UnitList'),
  loading: () => null,
});
const LoadableUserShow = Loadable({
  loader: () => import('./pages/users/UserShow'),
  loading: () => null,
});
const LoadableUserEdit = Loadable({
  loader: () => import('./pages/users/UserEdit'),
  loading: () => null,
});
const LoadableUserCreate = Loadable({
  loader: () => import('./pages/users/UserCreate'),
  loading: () => null,
});
const LoadableUserList = Loadable({
  loader: () => import('./pages/users/UserList'),
  loading: () => null,
});
export const getResources = (permissions: string[]) => (
  permissions ?
    [
      <Resource
        key='appLogins'
        name='appLogins'
        show={permissions.includes('appLogins.get') ? LoadableAppLoginShow : undefined}
        edit={permissions.includes('appLogins.update') ? LoadableAppLoginEdit : undefined}
        create={permissions.includes('appLogins.create') ? LoadableAppLoginCreate : undefined}
        list={permissions.includes('appLogins.all') ? LoadableAppLoginList : undefined}
        options={{label: 'Logins of usual (not admins) users'}}
      />,
      <Resource
        key='auditLogs'
        name='auditLogs'
        show={permissions.includes('auditLogs.get') ? LoadableAuditLogShow : undefined}
        edit={permissions.includes('auditLogs.update') ? LoadableAuditLogEdit : undefined}
        create={permissions.includes('auditLogs.create') ? LoadableAuditLogCreate : undefined}
        list={permissions.includes('auditLogs.all') ? LoadableAuditLogList : undefined}
        options={{label: 'Audit'}}
      />,
      <Resource
        key='delegations'
        name='delegations'
        show={permissions.includes('delegations.get') ? LoadableDelegationShow : undefined}
        edit={permissions.includes('delegations.update') ? LoadableDelegationEdit : undefined}
        create={permissions.includes('delegations.create') ? LoadableDelegationCreate : undefined}
        list={permissions.includes('delegations.all') ? LoadableDelegationList : undefined}
        options={{label: 'Delegations'}}
      />,
      <Resource
        key='files'
        name='files'
        show={permissions.includes('files.get') ? LoadableFileShow : undefined}
        edit={permissions.includes('files.update') ? LoadableFileEdit : undefined}
        create={permissions.includes('files.create') ? LoadableFileCreate : undefined}
        list={permissions.includes('files.all') ? LoadableFileList : undefined}
        options={{label: 'Files'}}
      />,
      <Resource
        key='languages'
        name='languages'
        show={permissions.includes('languages.get') ? LoadableLanguageShow : undefined}
        edit={permissions.includes('languages.update') ? LoadableLanguageEdit : undefined}
        create={permissions.includes('languages.create') ? LoadableLanguageCreate : undefined}
        list={permissions.includes('languages.all') ? LoadableLanguageList : undefined}
        options={{label: 'Languages'}}
      />,
      <Resource
        key='managerLogins'
        name='managerLogins'
        show={permissions.includes('managerLogins.get') ? LoadableManagerLoginShow : undefined}
        edit={permissions.includes('managerLogins.update') ? LoadableManagerLoginEdit : undefined}
        create={permissions.includes('managerLogins.create') ? LoadableManagerLoginCreate : undefined}
        list={permissions.includes('managerLogins.all') ? LoadableManagerLoginList : undefined}
        options={{label: 'Manager logins'}}
      />,
      <Resource
        key='managers'
        name='managers'
        show={permissions.includes('managers.get') ? LoadableManagerShow : undefined}
        edit={permissions.includes('managers.update') ? LoadableManagerEdit : undefined}
        create={permissions.includes('managers.create') ? LoadableManagerCreate : undefined}
        list={permissions.includes('managers.all') ? LoadableManagerList : undefined}
        options={{label: 'Manager'}}
      />,
      <Resource
        key='managersToPermissions'
        name='managersToPermissions'
        show={permissions.includes('managersToPermissions.get') ? LoadableManagersToPermissionShow : undefined}
        edit={permissions.includes('managersToPermissions.update') ? LoadableManagersToPermissionEdit : undefined}
        create={permissions.includes('managersToPermissions.create') ? LoadableManagersToPermissionCreate : undefined}
        list={permissions.includes('managersToPermissions.all') ? LoadableManagersToPermissionList : undefined}
        options={{label: 'Managers To Permissions'}}
      />,
      <Resource
        key='managersToRoles'
        name='managersToRoles'
        show={permissions.includes('managersToRoles.get') ? LoadableManagersToRoleShow : undefined}
        edit={permissions.includes('managersToRoles.update') ? LoadableManagersToRoleEdit : undefined}
        create={permissions.includes('managersToRoles.create') ? LoadableManagersToRoleCreate : undefined}
        list={permissions.includes('managersToRoles.all') ? LoadableManagersToRoleList : undefined}
        options={{label: 'Managers To Roles'}}
      />,
      <Resource
        key='messageTemplates'
        name='messageTemplates'
        show={permissions.includes('messageTemplates.get') ? LoadableMessageTemplateShow : undefined}
        edit={permissions.includes('messageTemplates.update') ? LoadableMessageTemplateEdit : undefined}
        create={permissions.includes('messageTemplates.create') ? LoadableMessageTemplateCreate : undefined}
        list={permissions.includes('messageTemplates.all') ? LoadableMessageTemplateList : undefined}
        options={{label: 'Message templates'}}
      />,
      <Resource
        key='permissions'
        name='permissions'
        show={permissions.includes('permissions.get') ? LoadablePermissionShow : undefined}
        edit={permissions.includes('permissions.update') ? LoadablePermissionEdit : undefined}
        create={permissions.includes('permissions.create') ? LoadablePermissionCreate : undefined}
        list={permissions.includes('permissions.all') ? LoadablePermissionList : undefined}
        options={{label: 'Permissions'}}
      />,
      <Resource
        key='roles'
        name='roles'
        show={permissions.includes('roles.get') ? LoadableRoleShow : undefined}
        edit={permissions.includes('roles.update') ? LoadableRoleEdit : undefined}
        create={permissions.includes('roles.create') ? LoadableRoleCreate : undefined}
        list={permissions.includes('roles.all') ? LoadableRoleList : undefined}
        options={{label: 'Roles'}}
      />,
      <Resource
        key='rolesToPermissions'
        name='rolesToPermissions'
        show={permissions.includes('rolesToPermissions.get') ? LoadableRolesToPermissionShow : undefined}
        edit={permissions.includes('rolesToPermissions.update') ? LoadableRolesToPermissionEdit : undefined}
        create={permissions.includes('rolesToPermissions.create') ? LoadableRolesToPermissionCreate : undefined}
        list={permissions.includes('rolesToPermissions.all') ? LoadableRolesToPermissionList : undefined}
        options={{label: 'Roles To Permissions'}}
      />,
      <Resource
        key='stats'
        name='stats'
        show={permissions.includes('stats.get') ? LoadableStatShow : undefined}
        edit={permissions.includes('stats.update') ? LoadableStatEdit : undefined}
        create={permissions.includes('stats.create') ? LoadableStatCreate : undefined}
        list={permissions.includes('stats.all') ? LoadableStatList : undefined}
        options={{label: 'Stats'}}
      />,
      <Resource
        key='tags'
        name='tags'
        show={permissions.includes('tags.get') ? LoadableTagShow : undefined}
        edit={permissions.includes('tags.update') ? LoadableTagEdit : undefined}
        create={permissions.includes('tags.create') ? LoadableTagCreate : undefined}
        list={permissions.includes('tags.all') ? LoadableTagList : undefined}
        options={{label: 'Tags'}}
      />,
      <Resource
        key='units'
        name='units'
        show={permissions.includes('units.get') ? LoadableUnitShow : undefined}
        edit={permissions.includes('units.update') ? LoadableUnitEdit : undefined}
        create={permissions.includes('units.create') ? LoadableUnitCreate : undefined}
        list={permissions.includes('units.all') ? LoadableUnitList : undefined}
        options={{label: 'Units'}}
      />,
      <Resource
        key='users'
        name='users'
        show={permissions.includes('users.get') ? LoadableUserShow : undefined}
        edit={permissions.includes('users.update') ? LoadableUserEdit : undefined}
        create={permissions.includes('users.create') ? LoadableUserCreate : undefined}
        list={permissions.includes('users.all') ? LoadableUserList : undefined}
        options={{label: 'Users'}}
      />,
    ] :
    []
);
