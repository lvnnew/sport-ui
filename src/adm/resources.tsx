/* eslint-disable max-len */
import * as React from 'react';
import {Resource, Translate} from 'react-admin';
import Loadable from '../shared/Loadable';
import {hasPermission} from '../utils/permissions';

const LoadableAdmRefreshTokenShow = Loadable({
  loader: () => import('./pages/admRefreshTokens/AdmRefreshTokenShow'),
});
const LoadableAdmRefreshTokenEdit = Loadable({
  loader: () => import('./pages/admRefreshTokens/AdmRefreshTokenEdit'),
});
const LoadableAdmRefreshTokenCreate = Loadable({
  loader: () => import('./pages/admRefreshTokens/AdmRefreshTokenCreate'),
});
const LoadableAdmRefreshTokenList = Loadable({
  loader: () => import('./pages/admRefreshTokens/AdmRefreshTokenList'),
});
const LoadableAggregateTrackingShow = Loadable({
  loader: () => import('./pages/aggregateTrackings/AggregateTrackingShow'),
});
const LoadableAggregateTrackingEdit = Loadable({
  loader: () => import('./pages/aggregateTrackings/AggregateTrackingEdit'),
});
const LoadableAggregateTrackingCreate = Loadable({
  loader: () => import('./pages/aggregateTrackings/AggregateTrackingCreate'),
});
const LoadableAggregateTrackingList = Loadable({
  loader: () => import('./pages/aggregateTrackings/AggregateTrackingList'),
});
const LoadableAppLoginShow = Loadable({
  loader: () => import('./pages/appLogins/AppLoginShow'),
});
const LoadableAppLoginEdit = Loadable({
  loader: () => import('./pages/appLogins/AppLoginEdit'),
});
const LoadableAppLoginCreate = Loadable({
  loader: () => import('./pages/appLogins/AppLoginCreate'),
});
const LoadableAppLoginList = Loadable({
  loader: () => import('./pages/appLogins/AppLoginList'),
});
const LoadableAppRefreshTokenShow = Loadable({
  loader: () => import('./pages/appRefreshTokens/AppRefreshTokenShow'),
});
const LoadableAppRefreshTokenEdit = Loadable({
  loader: () => import('./pages/appRefreshTokens/AppRefreshTokenEdit'),
});
const LoadableAppRefreshTokenCreate = Loadable({
  loader: () => import('./pages/appRefreshTokens/AppRefreshTokenCreate'),
});
const LoadableAppRefreshTokenList = Loadable({
  loader: () => import('./pages/appRefreshTokens/AppRefreshTokenList'),
});
const LoadableAuditLogActionTypeShow = Loadable({
  loader: () => import('./pages/auditLogActionTypes/AuditLogActionTypeShow'),
});
const LoadableAuditLogActionTypeEdit = Loadable({
  loader: () => import('./pages/auditLogActionTypes/AuditLogActionTypeEdit'),
});
const LoadableAuditLogActionTypeCreate = Loadable({
  loader: () => import('./pages/auditLogActionTypes/AuditLogActionTypeCreate'),
});
const LoadableAuditLogActionTypeList = Loadable({
  loader: () => import('./pages/auditLogActionTypes/AuditLogActionTypeList'),
});
const LoadableAuditLogShow = Loadable({
  loader: () => import('./pages/auditLogs/AuditLogShow'),
});
const LoadableAuditLogEdit = Loadable({
  loader: () => import('./pages/auditLogs/AuditLogEdit'),
});
const LoadableAuditLogCreate = Loadable({
  loader: () => import('./pages/auditLogs/AuditLogCreate'),
});
const LoadableAuditLogList = Loadable({
  loader: () => import('./pages/auditLogs/AuditLogList'),
});
const LoadableAutogenerationHistoryEntryShow = Loadable({
  loader: () => import('./pages/autogenerationHistoryEntries/AutogenerationHistoryEntryShow'),
});
const LoadableAutogenerationHistoryEntryEdit = Loadable({
  loader: () => import('./pages/autogenerationHistoryEntries/AutogenerationHistoryEntryEdit'),
});
const LoadableAutogenerationHistoryEntryCreate = Loadable({
  loader: () => import('./pages/autogenerationHistoryEntries/AutogenerationHistoryEntryCreate'),
});
const LoadableAutogenerationHistoryEntryList = Loadable({
  loader: () => import('./pages/autogenerationHistoryEntries/AutogenerationHistoryEntryList'),
});
const LoadableAutogenerationRuleShow = Loadable({
  loader: () => import('./pages/autogenerationRules/AutogenerationRuleShow'),
});
const LoadableAutogenerationRuleEdit = Loadable({
  loader: () => import('./pages/autogenerationRules/AutogenerationRuleEdit'),
});
const LoadableAutogenerationRuleCreate = Loadable({
  loader: () => import('./pages/autogenerationRules/AutogenerationRuleCreate'),
});
const LoadableAutogenerationRuleList = Loadable({
  loader: () => import('./pages/autogenerationRules/AutogenerationRuleList'),
});
const LoadableDelegationShow = Loadable({
  loader: () => import('./pages/delegations/DelegationShow'),
});
const LoadableDelegationEdit = Loadable({
  loader: () => import('./pages/delegations/DelegationEdit'),
});
const LoadableDelegationCreate = Loadable({
  loader: () => import('./pages/delegations/DelegationCreate'),
});
const LoadableDelegationList = Loadable({
  loader: () => import('./pages/delegations/DelegationList'),
});
const LoadableEntityShow = Loadable({
  loader: () => import('./pages/entities/EntityShow'),
});
const LoadableEntityEdit = Loadable({
  loader: () => import('./pages/entities/EntityEdit'),
});
const LoadableEntityCreate = Loadable({
  loader: () => import('./pages/entities/EntityCreate'),
});
const LoadableEntityList = Loadable({
  loader: () => import('./pages/entities/EntityList'),
});
const LoadableFileShow = Loadable({
  loader: () => import('./pages/files/FileShow'),
});
const LoadableFileEdit = Loadable({
  loader: () => import('./pages/files/FileEdit'),
});
const LoadableFileCreate = Loadable({
  loader: () => import('./pages/files/FileCreate'),
});
const LoadableFileList = Loadable({
  loader: () => import('./pages/files/FileList'),
});
const LoadableLanguageShow = Loadable({
  loader: () => import('./pages/languages/LanguageShow'),
});
const LoadableLanguageEdit = Loadable({
  loader: () => import('./pages/languages/LanguageEdit'),
});
const LoadableLanguageCreate = Loadable({
  loader: () => import('./pages/languages/LanguageCreate'),
});
const LoadableLanguageList = Loadable({
  loader: () => import('./pages/languages/LanguageList'),
});
const LoadableMailingCampaignStatusShow = Loadable({
  loader: () => import('./pages/mailingCampaignStatuses/MailingCampaignStatusShow'),
});
const LoadableMailingCampaignStatusEdit = Loadable({
  loader: () => import('./pages/mailingCampaignStatuses/MailingCampaignStatusEdit'),
});
const LoadableMailingCampaignStatusCreate = Loadable({
  loader: () => import('./pages/mailingCampaignStatuses/MailingCampaignStatusCreate'),
});
const LoadableMailingCampaignStatusList = Loadable({
  loader: () => import('./pages/mailingCampaignStatuses/MailingCampaignStatusList'),
});
const LoadableMailingCampaignShow = Loadable({
  loader: () => import('./pages/mailingCampaigns/MailingCampaignShow'),
});
const LoadableMailingCampaignEdit = Loadable({
  loader: () => import('./pages/mailingCampaigns/MailingCampaignEdit'),
});
const LoadableMailingCampaignCreate = Loadable({
  loader: () => import('./pages/mailingCampaigns/MailingCampaignCreate'),
});
const LoadableMailingCampaignList = Loadable({
  loader: () => import('./pages/mailingCampaigns/MailingCampaignList'),
});
const LoadableMailingMessageStatusShow = Loadable({
  loader: () => import('./pages/mailingMessageStatuses/MailingMessageStatusShow'),
});
const LoadableMailingMessageStatusEdit = Loadable({
  loader: () => import('./pages/mailingMessageStatuses/MailingMessageStatusEdit'),
});
const LoadableMailingMessageStatusCreate = Loadable({
  loader: () => import('./pages/mailingMessageStatuses/MailingMessageStatusCreate'),
});
const LoadableMailingMessageStatusList = Loadable({
  loader: () => import('./pages/mailingMessageStatuses/MailingMessageStatusList'),
});
const LoadableMailingMessageShow = Loadable({
  loader: () => import('./pages/mailingMessages/MailingMessageShow'),
});
const LoadableMailingMessageEdit = Loadable({
  loader: () => import('./pages/mailingMessages/MailingMessageEdit'),
});
const LoadableMailingMessageCreate = Loadable({
  loader: () => import('./pages/mailingMessages/MailingMessageCreate'),
});
const LoadableMailingMessageList = Loadable({
  loader: () => import('./pages/mailingMessages/MailingMessageList'),
});
const LoadableMailingTypeShow = Loadable({
  loader: () => import('./pages/mailingTypes/MailingTypeShow'),
});
const LoadableMailingTypeEdit = Loadable({
  loader: () => import('./pages/mailingTypes/MailingTypeEdit'),
});
const LoadableMailingTypeCreate = Loadable({
  loader: () => import('./pages/mailingTypes/MailingTypeCreate'),
});
const LoadableMailingTypeList = Loadable({
  loader: () => import('./pages/mailingTypes/MailingTypeList'),
});
const LoadableManagerLoginShow = Loadable({
  loader: () => import('./pages/managerLogins/ManagerLoginShow'),
});
const LoadableManagerLoginEdit = Loadable({
  loader: () => import('./pages/managerLogins/ManagerLoginEdit'),
});
const LoadableManagerLoginCreate = Loadable({
  loader: () => import('./pages/managerLogins/ManagerLoginCreate'),
});
const LoadableManagerLoginList = Loadable({
  loader: () => import('./pages/managerLogins/ManagerLoginList'),
});
const LoadableManagerShow = Loadable({
  loader: () => import('./pages/managers/ManagerShow'),
});
const LoadableManagerEdit = Loadable({
  loader: () => import('./pages/managers/ManagerEdit'),
});
const LoadableManagerCreate = Loadable({
  loader: () => import('./pages/managers/ManagerCreate'),
});
const LoadableManagerList = Loadable({
  loader: () => import('./pages/managers/ManagerList'),
});
const LoadableManagersToPermissionShow = Loadable({
  loader: () => import('./pages/managersToPermissions/ManagersToPermissionShow'),
});
const LoadableManagersToPermissionEdit = Loadable({
  loader: () => import('./pages/managersToPermissions/ManagersToPermissionEdit'),
});
const LoadableManagersToPermissionCreate = Loadable({
  loader: () => import('./pages/managersToPermissions/ManagersToPermissionCreate'),
});
const LoadableManagersToPermissionList = Loadable({
  loader: () => import('./pages/managersToPermissions/ManagersToPermissionList'),
});
const LoadableManagersToRoleShow = Loadable({
  loader: () => import('./pages/managersToRoles/ManagersToRoleShow'),
});
const LoadableManagersToRoleEdit = Loadable({
  loader: () => import('./pages/managersToRoles/ManagersToRoleEdit'),
});
const LoadableManagersToRoleCreate = Loadable({
  loader: () => import('./pages/managersToRoles/ManagersToRoleCreate'),
});
const LoadableManagersToRoleList = Loadable({
  loader: () => import('./pages/managersToRoles/ManagersToRoleList'),
});
const LoadableMessageTemplateLangVariantShow = Loadable({
  loader: () => import('./pages/messageTemplateLangVariants/MessageTemplateLangVariantShow'),
});
const LoadableMessageTemplateLangVariantEdit = Loadable({
  loader: () => import('./pages/messageTemplateLangVariants/MessageTemplateLangVariantEdit'),
});
const LoadableMessageTemplateLangVariantCreate = Loadable({
  loader: () => import('./pages/messageTemplateLangVariants/MessageTemplateLangVariantCreate'),
});
const LoadableMessageTemplateLangVariantList = Loadable({
  loader: () => import('./pages/messageTemplateLangVariants/MessageTemplateLangVariantList'),
});
const LoadableMessageTemplateShow = Loadable({
  loader: () => import('./pages/messageTemplates/MessageTemplateShow'),
});
const LoadableMessageTemplateEdit = Loadable({
  loader: () => import('./pages/messageTemplates/MessageTemplateEdit'),
});
const LoadableMessageTemplateCreate = Loadable({
  loader: () => import('./pages/messageTemplates/MessageTemplateCreate'),
});
const LoadableMessageTemplateList = Loadable({
  loader: () => import('./pages/messageTemplates/MessageTemplateList'),
});
const LoadableMessageTypeShow = Loadable({
  loader: () => import('./pages/messageTypes/MessageTypeShow'),
});
const LoadableMessageTypeEdit = Loadable({
  loader: () => import('./pages/messageTypes/MessageTypeEdit'),
});
const LoadableMessageTypeCreate = Loadable({
  loader: () => import('./pages/messageTypes/MessageTypeCreate'),
});
const LoadableMessageTypeList = Loadable({
  loader: () => import('./pages/messageTypes/MessageTypeList'),
});
const LoadablePermissionShow = Loadable({
  loader: () => import('./pages/permissions/PermissionShow'),
});
const LoadablePermissionEdit = Loadable({
  loader: () => import('./pages/permissions/PermissionEdit'),
});
const LoadablePermissionCreate = Loadable({
  loader: () => import('./pages/permissions/PermissionCreate'),
});
const LoadablePermissionList = Loadable({
  loader: () => import('./pages/permissions/PermissionList'),
});
const LoadableRoleShow = Loadable({
  loader: () => import('./pages/roles/RoleShow'),
});
const LoadableRoleEdit = Loadable({
  loader: () => import('./pages/roles/RoleEdit'),
});
const LoadableRoleCreate = Loadable({
  loader: () => import('./pages/roles/RoleCreate'),
});
const LoadableRoleList = Loadable({
  loader: () => import('./pages/roles/RoleList'),
});
const LoadableRolesToPermissionShow = Loadable({
  loader: () => import('./pages/rolesToPermissions/RolesToPermissionShow'),
});
const LoadableRolesToPermissionEdit = Loadable({
  loader: () => import('./pages/rolesToPermissions/RolesToPermissionEdit'),
});
const LoadableRolesToPermissionCreate = Loadable({
  loader: () => import('./pages/rolesToPermissions/RolesToPermissionCreate'),
});
const LoadableRolesToPermissionList = Loadable({
  loader: () => import('./pages/rolesToPermissions/RolesToPermissionList'),
});
const LoadableStatShow = Loadable({
  loader: () => import('./pages/stats/StatShow'),
});
const LoadableStatEdit = Loadable({
  loader: () => import('./pages/stats/StatEdit'),
});
const LoadableStatCreate = Loadable({
  loader: () => import('./pages/stats/StatCreate'),
});
const LoadableStatList = Loadable({
  loader: () => import('./pages/stats/StatList'),
});
const LoadableTagShow = Loadable({
  loader: () => import('./pages/tags/TagShow'),
});
const LoadableTagEdit = Loadable({
  loader: () => import('./pages/tags/TagEdit'),
});
const LoadableTagCreate = Loadable({
  loader: () => import('./pages/tags/TagCreate'),
});
const LoadableTagList = Loadable({
  loader: () => import('./pages/tags/TagList'),
});
const LoadableTemplateStyleShow = Loadable({
  loader: () => import('./pages/templateStyles/TemplateStyleShow'),
});
const LoadableTemplateStyleEdit = Loadable({
  loader: () => import('./pages/templateStyles/TemplateStyleEdit'),
});
const LoadableTemplateStyleCreate = Loadable({
  loader: () => import('./pages/templateStyles/TemplateStyleCreate'),
});
const LoadableTemplateStyleList = Loadable({
  loader: () => import('./pages/templateStyles/TemplateStyleList'),
});
const LoadableTenantShow = Loadable({
  loader: () => import('./pages/tenants/TenantShow'),
});
const LoadableTenantEdit = Loadable({
  loader: () => import('./pages/tenants/TenantEdit'),
});
const LoadableTenantCreate = Loadable({
  loader: () => import('./pages/tenants/TenantCreate'),
});
const LoadableTenantList = Loadable({
  loader: () => import('./pages/tenants/TenantList'),
});
const LoadableUnitShow = Loadable({
  loader: () => import('./pages/units/UnitShow'),
});
const LoadableUnitEdit = Loadable({
  loader: () => import('./pages/units/UnitEdit'),
});
const LoadableUnitCreate = Loadable({
  loader: () => import('./pages/units/UnitCreate'),
});
const LoadableUnitList = Loadable({
  loader: () => import('./pages/units/UnitList'),
});
const LoadableUserShow = Loadable({
  loader: () => import('./pages/users/UserShow'),
});
const LoadableUserEdit = Loadable({
  loader: () => import('./pages/users/UserEdit'),
});
const LoadableUserCreate = Loadable({
  loader: () => import('./pages/users/UserCreate'),
});
const LoadableUserList = Loadable({
  loader: () => import('./pages/users/UserList'),
});

export const getResources = (translate: Translate, permissions: string[]) => (
  permissions ?
    [
      <Resource
        key='admRefreshTokens'
        name='admRefreshTokens'
        show={hasPermission(permissions, 'admRefreshTokens.get') ? LoadableAdmRefreshTokenShow : undefined}
        edit={hasPermission(permissions, 'admRefreshTokens.update') ? LoadableAdmRefreshTokenEdit : undefined}
        create={hasPermission(permissions, 'admRefreshTokens.create') ? LoadableAdmRefreshTokenCreate : undefined}
        list={hasPermission(permissions, 'admRefreshTokens.all') ? LoadableAdmRefreshTokenList : undefined}
        options={{label: translate('catalogs.admRefreshTokens.title')}}
      />,
      <Resource
        key='aggregateTrackings'
        name='aggregateTrackings'
        show={hasPermission(permissions, 'aggregateTrackings.get') ? LoadableAggregateTrackingShow : undefined}
        edit={hasPermission(permissions, 'aggregateTrackings.update') ? LoadableAggregateTrackingEdit : undefined}
        create={hasPermission(permissions, 'aggregateTrackings.create') ? LoadableAggregateTrackingCreate : undefined}
        list={hasPermission(permissions, 'aggregateTrackings.all') ? LoadableAggregateTrackingList : undefined}
        options={{label: translate('infoRegistries.aggregateTrackings.title')}}
      />,
      <Resource
        key='appLogins'
        name='appLogins'
        show={hasPermission(permissions, 'appLogins.get') ? LoadableAppLoginShow : undefined}
        edit={hasPermission(permissions, 'appLogins.update') ? LoadableAppLoginEdit : undefined}
        create={hasPermission(permissions, 'appLogins.create') ? LoadableAppLoginCreate : undefined}
        list={hasPermission(permissions, 'appLogins.all') ? LoadableAppLoginList : undefined}
        options={{label: translate('catalogs.appLogins.title')}}
      />,
      <Resource
        key='appRefreshTokens'
        name='appRefreshTokens'
        show={hasPermission(permissions, 'appRefreshTokens.get') ? LoadableAppRefreshTokenShow : undefined}
        edit={hasPermission(permissions, 'appRefreshTokens.update') ? LoadableAppRefreshTokenEdit : undefined}
        create={hasPermission(permissions, 'appRefreshTokens.create') ? LoadableAppRefreshTokenCreate : undefined}
        list={hasPermission(permissions, 'appRefreshTokens.all') ? LoadableAppRefreshTokenList : undefined}
        options={{label: translate('catalogs.appRefreshTokens.title')}}
      />,
      <Resource
        key='auditLogActionTypes'
        name='auditLogActionTypes'
        show={hasPermission(permissions, 'auditLogActionTypes.get') ? LoadableAuditLogActionTypeShow : undefined}
        edit={hasPermission(permissions, 'auditLogActionTypes.update') ? LoadableAuditLogActionTypeEdit : undefined}
        create={hasPermission(permissions, 'auditLogActionTypes.create') ? LoadableAuditLogActionTypeCreate : undefined}
        list={hasPermission(permissions, 'auditLogActionTypes.all') ? LoadableAuditLogActionTypeList : undefined}
        options={{label: translate('catalogs.auditLogActionTypes.title')}}
      />,
      <Resource
        key='auditLogs'
        name='auditLogs'
        show={hasPermission(permissions, 'auditLogs.get') ? LoadableAuditLogShow : undefined}
        edit={hasPermission(permissions, 'auditLogs.update') ? LoadableAuditLogEdit : undefined}
        create={hasPermission(permissions, 'auditLogs.create') ? LoadableAuditLogCreate : undefined}
        list={hasPermission(permissions, 'auditLogs.all') ? LoadableAuditLogList : undefined}
        options={{label: translate('catalogs.auditLogs.title')}}
      />,
      <Resource
        key='autogenerationHistoryEntries'
        name='autogenerationHistoryEntries'
        show={hasPermission(permissions, 'autogenerationHistoryEntries.get') ? LoadableAutogenerationHistoryEntryShow : undefined}
        edit={hasPermission(permissions, 'autogenerationHistoryEntries.update') ? LoadableAutogenerationHistoryEntryEdit : undefined}
        create={hasPermission(permissions, 'autogenerationHistoryEntries.create') ? LoadableAutogenerationHistoryEntryCreate : undefined}
        list={hasPermission(permissions, 'autogenerationHistoryEntries.all') ? LoadableAutogenerationHistoryEntryList : undefined}
        options={{label: translate('catalogs.autogenerationHistoryEntries.title')}}
      />,
      <Resource
        key='autogenerationRules'
        name='autogenerationRules'
        show={hasPermission(permissions, 'autogenerationRules.get') ? LoadableAutogenerationRuleShow : undefined}
        edit={hasPermission(permissions, 'autogenerationRules.update') ? LoadableAutogenerationRuleEdit : undefined}
        create={hasPermission(permissions, 'autogenerationRules.create') ? LoadableAutogenerationRuleCreate : undefined}
        list={hasPermission(permissions, 'autogenerationRules.all') ? LoadableAutogenerationRuleList : undefined}
        options={{label: translate('catalogs.autogenerationRules.title')}}
      />,
      <Resource
        key='delegations'
        name='delegations'
        show={hasPermission(permissions, 'delegations.get') ? LoadableDelegationShow : undefined}
        edit={hasPermission(permissions, 'delegations.update') ? LoadableDelegationEdit : undefined}
        create={hasPermission(permissions, 'delegations.create') ? LoadableDelegationCreate : undefined}
        list={hasPermission(permissions, 'delegations.all') ? LoadableDelegationList : undefined}
        options={{label: translate('catalogs.delegations.title')}}
      />,
      <Resource
        key='entities'
        name='entities'
        show={hasPermission(permissions, 'entities.get') ? LoadableEntityShow : undefined}
        edit={hasPermission(permissions, 'entities.update') ? LoadableEntityEdit : undefined}
        create={hasPermission(permissions, 'entities.create') ? LoadableEntityCreate : undefined}
        list={hasPermission(permissions, 'entities.all') ? LoadableEntityList : undefined}
        options={{label: translate('catalogs.entities.title')}}
      />,
      <Resource
        key='files'
        name='files'
        show={hasPermission(permissions, 'files.get') ? LoadableFileShow : undefined}
        edit={hasPermission(permissions, 'files.update') ? LoadableFileEdit : undefined}
        create={hasPermission(permissions, 'files.create') ? LoadableFileCreate : undefined}
        list={hasPermission(permissions, 'files.all') ? LoadableFileList : undefined}
        options={{label: translate('catalogs.files.title')}}
      />,
      <Resource
        key='languages'
        name='languages'
        show={hasPermission(permissions, 'languages.get') ? LoadableLanguageShow : undefined}
        edit={hasPermission(permissions, 'languages.update') ? LoadableLanguageEdit : undefined}
        create={hasPermission(permissions, 'languages.create') ? LoadableLanguageCreate : undefined}
        list={hasPermission(permissions, 'languages.all') ? LoadableLanguageList : undefined}
        options={{label: translate('catalogs.languages.title')}}
      />,
      <Resource
        key='mailingCampaignStatuses'
        name='mailingCampaignStatuses'
        show={hasPermission(permissions, 'mailingCampaignStatuses.get') ? LoadableMailingCampaignStatusShow : undefined}
        edit={hasPermission(permissions, 'mailingCampaignStatuses.update') ? LoadableMailingCampaignStatusEdit : undefined}
        create={hasPermission(permissions, 'mailingCampaignStatuses.create') ? LoadableMailingCampaignStatusCreate : undefined}
        list={hasPermission(permissions, 'mailingCampaignStatuses.all') ? LoadableMailingCampaignStatusList : undefined}
        options={{label: translate('catalogs.mailingCampaignStatuses.title')}}
      />,
      <Resource
        key='mailingCampaigns'
        name='mailingCampaigns'
        show={hasPermission(permissions, 'mailingCampaigns.get') ? LoadableMailingCampaignShow : undefined}
        edit={hasPermission(permissions, 'mailingCampaigns.update') ? LoadableMailingCampaignEdit : undefined}
        create={hasPermission(permissions, 'mailingCampaigns.create') ? LoadableMailingCampaignCreate : undefined}
        list={hasPermission(permissions, 'mailingCampaigns.all') ? LoadableMailingCampaignList : undefined}
        options={{label: translate('catalogs.mailingCampaigns.title')}}
      />,
      <Resource
        key='mailingMessageStatuses'
        name='mailingMessageStatuses'
        show={hasPermission(permissions, 'mailingMessageStatuses.get') ? LoadableMailingMessageStatusShow : undefined}
        edit={hasPermission(permissions, 'mailingMessageStatuses.update') ? LoadableMailingMessageStatusEdit : undefined}
        create={hasPermission(permissions, 'mailingMessageStatuses.create') ? LoadableMailingMessageStatusCreate : undefined}
        list={hasPermission(permissions, 'mailingMessageStatuses.all') ? LoadableMailingMessageStatusList : undefined}
        options={{label: translate('catalogs.mailingMessageStatuses.title')}}
      />,
      <Resource
        key='mailingMessages'
        name='mailingMessages'
        show={hasPermission(permissions, 'mailingMessages.get') ? LoadableMailingMessageShow : undefined}
        edit={hasPermission(permissions, 'mailingMessages.update') ? LoadableMailingMessageEdit : undefined}
        create={hasPermission(permissions, 'mailingMessages.create') ? LoadableMailingMessageCreate : undefined}
        list={hasPermission(permissions, 'mailingMessages.all') ? LoadableMailingMessageList : undefined}
        options={{label: translate('catalogs.mailingMessages.title')}}
      />,
      <Resource
        key='mailingTypes'
        name='mailingTypes'
        show={hasPermission(permissions, 'mailingTypes.get') ? LoadableMailingTypeShow : undefined}
        edit={hasPermission(permissions, 'mailingTypes.update') ? LoadableMailingTypeEdit : undefined}
        create={hasPermission(permissions, 'mailingTypes.create') ? LoadableMailingTypeCreate : undefined}
        list={hasPermission(permissions, 'mailingTypes.all') ? LoadableMailingTypeList : undefined}
        options={{label: translate('catalogs.mailingTypes.title')}}
      />,
      <Resource
        key='managerLogins'
        name='managerLogins'
        show={hasPermission(permissions, 'managerLogins.get') ? LoadableManagerLoginShow : undefined}
        edit={hasPermission(permissions, 'managerLogins.update') ? LoadableManagerLoginEdit : undefined}
        create={hasPermission(permissions, 'managerLogins.create') ? LoadableManagerLoginCreate : undefined}
        list={hasPermission(permissions, 'managerLogins.all') ? LoadableManagerLoginList : undefined}
        options={{label: translate('catalogs.managerLogins.title')}}
      />,
      <Resource
        key='managers'
        name='managers'
        show={hasPermission(permissions, 'managers.get') ? LoadableManagerShow : undefined}
        edit={hasPermission(permissions, 'managers.update') ? LoadableManagerEdit : undefined}
        create={hasPermission(permissions, 'managers.create') ? LoadableManagerCreate : undefined}
        list={hasPermission(permissions, 'managers.all') ? LoadableManagerList : undefined}
        options={{label: translate('catalogs.managers.title')}}
      />,
      <Resource
        key='managersToPermissions'
        name='managersToPermissions'
        show={hasPermission(permissions, 'managersToPermissions.get') ? LoadableManagersToPermissionShow : undefined}
        edit={hasPermission(permissions, 'managersToPermissions.update') ? LoadableManagersToPermissionEdit : undefined}
        create={hasPermission(permissions, 'managersToPermissions.create') ? LoadableManagersToPermissionCreate : undefined}
        list={hasPermission(permissions, 'managersToPermissions.all') ? LoadableManagersToPermissionList : undefined}
        options={{label: translate('catalogs.managersToPermissions.title')}}
      />,
      <Resource
        key='managersToRoles'
        name='managersToRoles'
        show={hasPermission(permissions, 'managersToRoles.get') ? LoadableManagersToRoleShow : undefined}
        edit={hasPermission(permissions, 'managersToRoles.update') ? LoadableManagersToRoleEdit : undefined}
        create={hasPermission(permissions, 'managersToRoles.create') ? LoadableManagersToRoleCreate : undefined}
        list={hasPermission(permissions, 'managersToRoles.all') ? LoadableManagersToRoleList : undefined}
        options={{label: translate('catalogs.managersToRoles.title')}}
      />,
      <Resource
        key='messageTemplateLangVariants'
        name='messageTemplateLangVariants'
        show={hasPermission(permissions, 'messageTemplateLangVariants.get') ? LoadableMessageTemplateLangVariantShow : undefined}
        edit={hasPermission(permissions, 'messageTemplateLangVariants.update') ? LoadableMessageTemplateLangVariantEdit : undefined}
        create={hasPermission(permissions, 'messageTemplateLangVariants.create') ? LoadableMessageTemplateLangVariantCreate : undefined}
        list={hasPermission(permissions, 'messageTemplateLangVariants.all') ? LoadableMessageTemplateLangVariantList : undefined}
        options={{label: translate('catalogs.messageTemplateLangVariants.title')}}
      />,
      <Resource
        key='messageTemplates'
        name='messageTemplates'
        show={hasPermission(permissions, 'messageTemplates.get') ? LoadableMessageTemplateShow : undefined}
        edit={hasPermission(permissions, 'messageTemplates.update') ? LoadableMessageTemplateEdit : undefined}
        create={hasPermission(permissions, 'messageTemplates.create') ? LoadableMessageTemplateCreate : undefined}
        list={hasPermission(permissions, 'messageTemplates.all') ? LoadableMessageTemplateList : undefined}
        options={{label: translate('catalogs.messageTemplates.title')}}
      />,
      <Resource
        key='messageTypes'
        name='messageTypes'
        show={hasPermission(permissions, 'messageTypes.get') ? LoadableMessageTypeShow : undefined}
        edit={hasPermission(permissions, 'messageTypes.update') ? LoadableMessageTypeEdit : undefined}
        create={hasPermission(permissions, 'messageTypes.create') ? LoadableMessageTypeCreate : undefined}
        list={hasPermission(permissions, 'messageTypes.all') ? LoadableMessageTypeList : undefined}
        options={{label: translate('catalogs.messageTypes.title')}}
      />,
      <Resource
        key='permissions'
        name='permissions'
        show={hasPermission(permissions, 'permissions.get') ? LoadablePermissionShow : undefined}
        edit={hasPermission(permissions, 'permissions.update') ? LoadablePermissionEdit : undefined}
        create={hasPermission(permissions, 'permissions.create') ? LoadablePermissionCreate : undefined}
        list={hasPermission(permissions, 'permissions.all') ? LoadablePermissionList : undefined}
        options={{label: translate('catalogs.permissions.title')}}
      />,
      <Resource
        key='roles'
        name='roles'
        show={hasPermission(permissions, 'roles.get') ? LoadableRoleShow : undefined}
        edit={hasPermission(permissions, 'roles.update') ? LoadableRoleEdit : undefined}
        create={hasPermission(permissions, 'roles.create') ? LoadableRoleCreate : undefined}
        list={hasPermission(permissions, 'roles.all') ? LoadableRoleList : undefined}
        options={{label: translate('catalogs.roles.title')}}
      />,
      <Resource
        key='rolesToPermissions'
        name='rolesToPermissions'
        show={hasPermission(permissions, 'rolesToPermissions.get') ? LoadableRolesToPermissionShow : undefined}
        edit={hasPermission(permissions, 'rolesToPermissions.update') ? LoadableRolesToPermissionEdit : undefined}
        create={hasPermission(permissions, 'rolesToPermissions.create') ? LoadableRolesToPermissionCreate : undefined}
        list={hasPermission(permissions, 'rolesToPermissions.all') ? LoadableRolesToPermissionList : undefined}
        options={{label: translate('catalogs.rolesToPermissions.title')}}
      />,
      <Resource
        key='stats'
        name='stats'
        show={hasPermission(permissions, 'stats.get') ? LoadableStatShow : undefined}
        edit={hasPermission(permissions, 'stats.update') ? LoadableStatEdit : undefined}
        create={hasPermission(permissions, 'stats.create') ? LoadableStatCreate : undefined}
        list={hasPermission(permissions, 'stats.all') ? LoadableStatList : undefined}
        options={{label: translate('catalogs.stats.title')}}
      />,
      <Resource
        key='tags'
        name='tags'
        show={hasPermission(permissions, 'tags.get') ? LoadableTagShow : undefined}
        edit={hasPermission(permissions, 'tags.update') ? LoadableTagEdit : undefined}
        create={hasPermission(permissions, 'tags.create') ? LoadableTagCreate : undefined}
        list={hasPermission(permissions, 'tags.all') ? LoadableTagList : undefined}
        options={{label: translate('catalogs.tags.title')}}
      />,
      <Resource
        key='templateStyles'
        name='templateStyles'
        show={hasPermission(permissions, 'templateStyles.get') ? LoadableTemplateStyleShow : undefined}
        edit={hasPermission(permissions, 'templateStyles.update') ? LoadableTemplateStyleEdit : undefined}
        create={hasPermission(permissions, 'templateStyles.create') ? LoadableTemplateStyleCreate : undefined}
        list={hasPermission(permissions, 'templateStyles.all') ? LoadableTemplateStyleList : undefined}
        options={{label: translate('catalogs.templateStyles.title')}}
      />,
      <Resource
        key='tenants'
        name='tenants'
        show={hasPermission(permissions, 'tenants.get') ? LoadableTenantShow : undefined}
        edit={hasPermission(permissions, 'tenants.update') ? LoadableTenantEdit : undefined}
        create={hasPermission(permissions, 'tenants.create') ? LoadableTenantCreate : undefined}
        list={hasPermission(permissions, 'tenants.all') ? LoadableTenantList : undefined}
        options={{label: translate('catalogs.tenants.title')}}
      />,
      <Resource
        key='units'
        name='units'
        show={hasPermission(permissions, 'units.get') ? LoadableUnitShow : undefined}
        edit={hasPermission(permissions, 'units.update') ? LoadableUnitEdit : undefined}
        create={hasPermission(permissions, 'units.create') ? LoadableUnitCreate : undefined}
        list={hasPermission(permissions, 'units.all') ? LoadableUnitList : undefined}
        options={{label: translate('catalogs.units.title')}}
      />,
      <Resource
        key='users'
        name='users'
        show={hasPermission(permissions, 'users.get') ? LoadableUserShow : undefined}
        edit={hasPermission(permissions, 'users.update') ? LoadableUserEdit : undefined}
        create={hasPermission(permissions, 'users.create') ? LoadableUserCreate : undefined}
        list={hasPermission(permissions, 'users.all') ? LoadableUserList : undefined}
        options={{label: translate('catalogs.users.title')}}
      />,
    ] :
    []
);
