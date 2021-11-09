/* eslint-disable max-len */
import * as React from 'react';
import {
  Resource,
} from 'react-admin';

import Loader from '../shared/Loader';
import Loadable from 'react-loadable';

const LoadableAppLoginShow = Loadable({
  loader: () => import('./pages/appLogins/AppLoginShow'),
  loading: Loader,
});
const LoadableAppLoginEdit = Loadable({
  loader: () => import('./pages/appLogins/AppLoginEdit'),
  loading: Loader,
});
const LoadableAppLoginCreate = Loadable({
  loader: () => import('./pages/appLogins/AppLoginCreate'),
  loading: Loader,
});
const LoadableAppLoginList = Loadable({
  loader: () => import('./pages/appLogins/AppLoginList'),
  loading: Loader,
});
const LoadableAuditLogShow = Loadable({
  loader: () => import('./pages/auditLogs/AuditLogShow'),
  loading: Loader,
});
const LoadableAuditLogEdit = Loadable({
  loader: () => import('./pages/auditLogs/AuditLogEdit'),
  loading: Loader,
});
const LoadableAuditLogCreate = Loadable({
  loader: () => import('./pages/auditLogs/AuditLogCreate'),
  loading: Loader,
});
const LoadableAuditLogList = Loadable({
  loader: () => import('./pages/auditLogs/AuditLogList'),
  loading: Loader,
});
const LoadableAutogenerationHistoryEntryShow = Loadable({
  loader: () => import('./pages/autogenerationHistoryEntries/AutogenerationHistoryEntryShow'),
  loading: Loader,
});
const LoadableAutogenerationHistoryEntryEdit = Loadable({
  loader: () => import('./pages/autogenerationHistoryEntries/AutogenerationHistoryEntryEdit'),
  loading: Loader,
});
const LoadableAutogenerationHistoryEntryCreate = Loadable({
  loader: () => import('./pages/autogenerationHistoryEntries/AutogenerationHistoryEntryCreate'),
  loading: Loader,
});
const LoadableAutogenerationHistoryEntryList = Loadable({
  loader: () => import('./pages/autogenerationHistoryEntries/AutogenerationHistoryEntryList'),
  loading: Loader,
});
const LoadableAutogenerationRuleShow = Loadable({
  loader: () => import('./pages/autogenerationRules/AutogenerationRuleShow'),
  loading: Loader,
});
const LoadableAutogenerationRuleEdit = Loadable({
  loader: () => import('./pages/autogenerationRules/AutogenerationRuleEdit'),
  loading: Loader,
});
const LoadableAutogenerationRuleCreate = Loadable({
  loader: () => import('./pages/autogenerationRules/AutogenerationRuleCreate'),
  loading: Loader,
});
const LoadableAutogenerationRuleList = Loadable({
  loader: () => import('./pages/autogenerationRules/AutogenerationRuleList'),
  loading: Loader,
});
const LoadableDelegationShow = Loadable({
  loader: () => import('./pages/delegations/DelegationShow'),
  loading: Loader,
});
const LoadableDelegationEdit = Loadable({
  loader: () => import('./pages/delegations/DelegationEdit'),
  loading: Loader,
});
const LoadableDelegationCreate = Loadable({
  loader: () => import('./pages/delegations/DelegationCreate'),
  loading: Loader,
});
const LoadableDelegationList = Loadable({
  loader: () => import('./pages/delegations/DelegationList'),
  loading: Loader,
});
const LoadableFileShow = Loadable({
  loader: () => import('./pages/files/FileShow'),
  loading: Loader,
});
const LoadableFileEdit = Loadable({
  loader: () => import('./pages/files/FileEdit'),
  loading: Loader,
});
const LoadableFileCreate = Loadable({
  loader: () => import('./pages/files/FileCreate'),
  loading: Loader,
});
const LoadableFileList = Loadable({
  loader: () => import('./pages/files/FileList'),
  loading: Loader,
});
const LoadableLanguageShow = Loadable({
  loader: () => import('./pages/languages/LanguageShow'),
  loading: Loader,
});
const LoadableLanguageEdit = Loadable({
  loader: () => import('./pages/languages/LanguageEdit'),
  loading: Loader,
});
const LoadableLanguageCreate = Loadable({
  loader: () => import('./pages/languages/LanguageCreate'),
  loading: Loader,
});
const LoadableLanguageList = Loadable({
  loader: () => import('./pages/languages/LanguageList'),
  loading: Loader,
});
const LoadableManagerLoginShow = Loadable({
  loader: () => import('./pages/managerLogins/ManagerLoginShow'),
  loading: Loader,
});
const LoadableManagerLoginEdit = Loadable({
  loader: () => import('./pages/managerLogins/ManagerLoginEdit'),
  loading: Loader,
});
const LoadableManagerLoginCreate = Loadable({
  loader: () => import('./pages/managerLogins/ManagerLoginCreate'),
  loading: Loader,
});
const LoadableManagerLoginList = Loadable({
  loader: () => import('./pages/managerLogins/ManagerLoginList'),
  loading: Loader,
});
const LoadableManagerShow = Loadable({
  loader: () => import('./pages/managers/ManagerShow'),
  loading: Loader,
});
const LoadableManagerEdit = Loadable({
  loader: () => import('./pages/managers/ManagerEdit'),
  loading: Loader,
});
const LoadableManagerCreate = Loadable({
  loader: () => import('./pages/managers/ManagerCreate'),
  loading: Loader,
});
const LoadableManagerList = Loadable({
  loader: () => import('./pages/managers/ManagerList'),
  loading: Loader,
});
const LoadableManagersToPermissionShow = Loadable({
  loader: () => import('./pages/managersToPermissions/ManagersToPermissionShow'),
  loading: Loader,
});
const LoadableManagersToPermissionEdit = Loadable({
  loader: () => import('./pages/managersToPermissions/ManagersToPermissionEdit'),
  loading: Loader,
});
const LoadableManagersToPermissionCreate = Loadable({
  loader: () => import('./pages/managersToPermissions/ManagersToPermissionCreate'),
  loading: Loader,
});
const LoadableManagersToPermissionList = Loadable({
  loader: () => import('./pages/managersToPermissions/ManagersToPermissionList'),
  loading: Loader,
});
const LoadableManagersToRoleShow = Loadable({
  loader: () => import('./pages/managersToRoles/ManagersToRoleShow'),
  loading: Loader,
});
const LoadableManagersToRoleEdit = Loadable({
  loader: () => import('./pages/managersToRoles/ManagersToRoleEdit'),
  loading: Loader,
});
const LoadableManagersToRoleCreate = Loadable({
  loader: () => import('./pages/managersToRoles/ManagersToRoleCreate'),
  loading: Loader,
});
const LoadableManagersToRoleList = Loadable({
  loader: () => import('./pages/managersToRoles/ManagersToRoleList'),
  loading: Loader,
});
const LoadableMessageTemplateShow = Loadable({
  loader: () => import('./pages/messageTemplates/MessageTemplateShow'),
  loading: Loader,
});
const LoadableMessageTemplateEdit = Loadable({
  loader: () => import('./pages/messageTemplates/MessageTemplateEdit'),
  loading: Loader,
});
const LoadableMessageTemplateCreate = Loadable({
  loader: () => import('./pages/messageTemplates/MessageTemplateCreate'),
  loading: Loader,
});
const LoadableMessageTemplateList = Loadable({
  loader: () => import('./pages/messageTemplates/MessageTemplateList'),
  loading: Loader,
});
const LoadablePermissionShow = Loadable({
  loader: () => import('./pages/permissions/PermissionShow'),
  loading: Loader,
});
const LoadablePermissionEdit = Loadable({
  loader: () => import('./pages/permissions/PermissionEdit'),
  loading: Loader,
});
const LoadablePermissionCreate = Loadable({
  loader: () => import('./pages/permissions/PermissionCreate'),
  loading: Loader,
});
const LoadablePermissionList = Loadable({
  loader: () => import('./pages/permissions/PermissionList'),
  loading: Loader,
});
const LoadableRoleShow = Loadable({
  loader: () => import('./pages/roles/RoleShow'),
  loading: Loader,
});
const LoadableRoleEdit = Loadable({
  loader: () => import('./pages/roles/RoleEdit'),
  loading: Loader,
});
const LoadableRoleCreate = Loadable({
  loader: () => import('./pages/roles/RoleCreate'),
  loading: Loader,
});
const LoadableRoleList = Loadable({
  loader: () => import('./pages/roles/RoleList'),
  loading: Loader,
});
const LoadableRolesToPermissionShow = Loadable({
  loader: () => import('./pages/rolesToPermissions/RolesToPermissionShow'),
  loading: Loader,
});
const LoadableRolesToPermissionEdit = Loadable({
  loader: () => import('./pages/rolesToPermissions/RolesToPermissionEdit'),
  loading: Loader,
});
const LoadableRolesToPermissionCreate = Loadable({
  loader: () => import('./pages/rolesToPermissions/RolesToPermissionCreate'),
  loading: Loader,
});
const LoadableRolesToPermissionList = Loadable({
  loader: () => import('./pages/rolesToPermissions/RolesToPermissionList'),
  loading: Loader,
});
const LoadableStatShow = Loadable({
  loader: () => import('./pages/stats/StatShow'),
  loading: Loader,
});
const LoadableStatEdit = Loadable({
  loader: () => import('./pages/stats/StatEdit'),
  loading: Loader,
});
const LoadableStatCreate = Loadable({
  loader: () => import('./pages/stats/StatCreate'),
  loading: Loader,
});
const LoadableStatList = Loadable({
  loader: () => import('./pages/stats/StatList'),
  loading: Loader,
});
const LoadableTagShow = Loadable({
  loader: () => import('./pages/tags/TagShow'),
  loading: Loader,
});
const LoadableTagEdit = Loadable({
  loader: () => import('./pages/tags/TagEdit'),
  loading: Loader,
});
const LoadableTagCreate = Loadable({
  loader: () => import('./pages/tags/TagCreate'),
  loading: Loader,
});
const LoadableTagList = Loadable({
  loader: () => import('./pages/tags/TagList'),
  loading: Loader,
});
const LoadableUnitShow = Loadable({
  loader: () => import('./pages/units/UnitShow'),
  loading: Loader,
});
const LoadableUnitEdit = Loadable({
  loader: () => import('./pages/units/UnitEdit'),
  loading: Loader,
});
const LoadableUnitCreate = Loadable({
  loader: () => import('./pages/units/UnitCreate'),
  loading: Loader,
});
const LoadableUnitList = Loadable({
  loader: () => import('./pages/units/UnitList'),
  loading: Loader,
});
const LoadableUserShow = Loadable({
  loader: () => import('./pages/users/UserShow'),
  loading: Loader,
});
const LoadableUserEdit = Loadable({
  loader: () => import('./pages/users/UserEdit'),
  loading: Loader,
});
const LoadableUserCreate = Loadable({
  loader: () => import('./pages/users/UserCreate'),
  loading: Loader,
});
const LoadableUserList = Loadable({
  loader: () => import('./pages/users/UserList'),
  loading: Loader,
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
        key='autogenerationHistoryEntries'
        name='autogenerationHistoryEntries'
        show={permissions.includes('autogenerationHistoryEntries.get') ? LoadableAutogenerationHistoryEntryShow : undefined}
        edit={permissions.includes('autogenerationHistoryEntries.update') ? LoadableAutogenerationHistoryEntryEdit : undefined}
        create={permissions.includes('autogenerationHistoryEntries.create') ? LoadableAutogenerationHistoryEntryCreate : undefined}
        list={permissions.includes('autogenerationHistoryEntries.all') ? LoadableAutogenerationHistoryEntryList : undefined}
        options={{label: 'Autogeneration History'}}
      />,
      <Resource
        key='autogenerationRules'
        name='autogenerationRules'
        show={permissions.includes('autogenerationRules.get') ? LoadableAutogenerationRuleShow : undefined}
        edit={permissions.includes('autogenerationRules.update') ? LoadableAutogenerationRuleEdit : undefined}
        create={permissions.includes('autogenerationRules.create') ? LoadableAutogenerationRuleCreate : undefined}
        list={permissions.includes('autogenerationRules.all') ? LoadableAutogenerationRuleList : undefined}
        options={{label: 'Autogeneration Rules'}}
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
