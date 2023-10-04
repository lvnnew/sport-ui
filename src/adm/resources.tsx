/* eslint-disable max-len */
import * as React from 'react';
import {Resource, Translate} from 'react-admin';
import Loadable from '../shared/Loadable';
import {hasPermission} from '../utils/permissions';

const LoadableAdmRefreshTokenShow = Loadable(() => import('./pages/admRefreshTokens/AdmRefreshTokenShow'));
const LoadableAdmRefreshTokenEdit = Loadable(() => import('./pages/admRefreshTokens/AdmRefreshTokenEdit'));
const LoadableAdmRefreshTokenCreate = Loadable(() => import('./pages/admRefreshTokens/AdmRefreshTokenCreate'));
const LoadableAdmRefreshTokenList = Loadable(() => import('./pages/admRefreshTokens/AdmRefreshTokenList'));
const LoadableAggregateTrackingShow = Loadable(() => import('./pages/aggregateTrackings/AggregateTrackingShow'));
const LoadableAggregateTrackingEdit = Loadable(() => import('./pages/aggregateTrackings/AggregateTrackingEdit'));
const LoadableAggregateTrackingCreate = Loadable(() => import('./pages/aggregateTrackings/AggregateTrackingCreate'));
const LoadableAggregateTrackingList = Loadable(() => import('./pages/aggregateTrackings/AggregateTrackingList'));
const LoadableAppLoginShow = Loadable(() => import('./pages/appLogins/AppLoginShow'));
const LoadableAppLoginEdit = Loadable(() => import('./pages/appLogins/AppLoginEdit'));
const LoadableAppLoginCreate = Loadable(() => import('./pages/appLogins/AppLoginCreate'));
const LoadableAppLoginList = Loadable(() => import('./pages/appLogins/AppLoginList'));
const LoadableAppRefreshTokenShow = Loadable(() => import('./pages/appRefreshTokens/AppRefreshTokenShow'));
const LoadableAppRefreshTokenEdit = Loadable(() => import('./pages/appRefreshTokens/AppRefreshTokenEdit'));
const LoadableAppRefreshTokenCreate = Loadable(() => import('./pages/appRefreshTokens/AppRefreshTokenCreate'));
const LoadableAppRefreshTokenList = Loadable(() => import('./pages/appRefreshTokens/AppRefreshTokenList'));
const LoadableAuditLogActionTypeShow = Loadable(() => import('./pages/auditLogActionTypes/AuditLogActionTypeShow'));
const LoadableAuditLogActionTypeEdit = Loadable(() => import('./pages/auditLogActionTypes/AuditLogActionTypeEdit'));
const LoadableAuditLogActionTypeCreate = Loadable(() => import('./pages/auditLogActionTypes/AuditLogActionTypeCreate'));
const LoadableAuditLogActionTypeList = Loadable(() => import('./pages/auditLogActionTypes/AuditLogActionTypeList'));
const LoadableAuditLogShow = Loadable(() => import('./pages/auditLogs/AuditLogShow'));
const LoadableAuditLogList = Loadable(() => import('./pages/auditLogs/AuditLogList'));
const LoadableAutogenerationHistoryEntryShow = Loadable(() => import('./pages/autogenerationHistoryEntries/AutogenerationHistoryEntryShow'));
const LoadableAutogenerationHistoryEntryEdit = Loadable(() => import('./pages/autogenerationHistoryEntries/AutogenerationHistoryEntryEdit'));
const LoadableAutogenerationHistoryEntryCreate = Loadable(() => import('./pages/autogenerationHistoryEntries/AutogenerationHistoryEntryCreate'));
const LoadableAutogenerationHistoryEntryList = Loadable(() => import('./pages/autogenerationHistoryEntries/AutogenerationHistoryEntryList'));
const LoadableAutogenerationRuleShow = Loadable(() => import('./pages/autogenerationRules/AutogenerationRuleShow'));
const LoadableAutogenerationRuleEdit = Loadable(() => import('./pages/autogenerationRules/AutogenerationRuleEdit'));
const LoadableAutogenerationRuleCreate = Loadable(() => import('./pages/autogenerationRules/AutogenerationRuleCreate'));
const LoadableAutogenerationRuleList = Loadable(() => import('./pages/autogenerationRules/AutogenerationRuleList'));
const LoadableConfigurationVariableShow = Loadable(() => import('./pages/configurationVariables/ConfigurationVariableShow'));
const LoadableConfigurationVariableEdit = Loadable(() => import('./pages/configurationVariables/ConfigurationVariableEdit'));
const LoadableConfigurationVariableCreate = Loadable(() => import('./pages/configurationVariables/ConfigurationVariableCreate'));
const LoadableConfigurationVariableList = Loadable(() => import('./pages/configurationVariables/ConfigurationVariableList'));
const LoadableDelegationShow = Loadable(() => import('./pages/delegations/DelegationShow'));
const LoadableDelegationEdit = Loadable(() => import('./pages/delegations/DelegationEdit'));
const LoadableDelegationCreate = Loadable(() => import('./pages/delegations/DelegationCreate'));
const LoadableDelegationList = Loadable(() => import('./pages/delegations/DelegationList'));
const LoadableEntityShow = Loadable(() => import('./pages/entities/EntityShow'));
const LoadableEntityEdit = Loadable(() => import('./pages/entities/EntityEdit'));
const LoadableEntityCreate = Loadable(() => import('./pages/entities/EntityCreate'));
const LoadableEntityList = Loadable(() => import('./pages/entities/EntityList'));
const LoadableFileShow = Loadable(() => import('./pages/files/FileShow'));
const LoadableFileEdit = Loadable(() => import('./pages/files/FileEdit'));
const LoadableFileCreate = Loadable(() => import('./pages/files/FileCreate'));
const LoadableFileList = Loadable(() => import('./pages/files/FileList'));
const LoadableLanguageShow = Loadable(() => import('./pages/languages/LanguageShow'));
const LoadableLanguageEdit = Loadable(() => import('./pages/languages/LanguageEdit'));
const LoadableLanguageCreate = Loadable(() => import('./pages/languages/LanguageCreate'));
const LoadableLanguageList = Loadable(() => import('./pages/languages/LanguageList'));
const LoadableMailingCampaignStatusShow = Loadable(() => import('./pages/mailingCampaignStatuses/MailingCampaignStatusShow'));
const LoadableMailingCampaignStatusEdit = Loadable(() => import('./pages/mailingCampaignStatuses/MailingCampaignStatusEdit'));
const LoadableMailingCampaignStatusCreate = Loadable(() => import('./pages/mailingCampaignStatuses/MailingCampaignStatusCreate'));
const LoadableMailingCampaignStatusList = Loadable(() => import('./pages/mailingCampaignStatuses/MailingCampaignStatusList'));
const LoadableMailingCampaignShow = Loadable(() => import('./pages/mailingCampaigns/MailingCampaignShow'));
const LoadableMailingCampaignEdit = Loadable(() => import('./pages/mailingCampaigns/MailingCampaignEdit'));
const LoadableMailingCampaignCreate = Loadable(() => import('./pages/mailingCampaigns/MailingCampaignCreate'));
const LoadableMailingCampaignList = Loadable(() => import('./pages/mailingCampaigns/MailingCampaignList'));
const LoadableMailingMessageStatusShow = Loadable(() => import('./pages/mailingMessageStatuses/MailingMessageStatusShow'));
const LoadableMailingMessageStatusEdit = Loadable(() => import('./pages/mailingMessageStatuses/MailingMessageStatusEdit'));
const LoadableMailingMessageStatusCreate = Loadable(() => import('./pages/mailingMessageStatuses/MailingMessageStatusCreate'));
const LoadableMailingMessageStatusList = Loadable(() => import('./pages/mailingMessageStatuses/MailingMessageStatusList'));
const LoadableMailingMessageShow = Loadable(() => import('./pages/mailingMessages/MailingMessageShow'));
const LoadableMailingMessageEdit = Loadable(() => import('./pages/mailingMessages/MailingMessageEdit'));
const LoadableMailingMessageCreate = Loadable(() => import('./pages/mailingMessages/MailingMessageCreate'));
const LoadableMailingMessageList = Loadable(() => import('./pages/mailingMessages/MailingMessageList'));
const LoadableMailingTypeShow = Loadable(() => import('./pages/mailingTypes/MailingTypeShow'));
const LoadableMailingTypeEdit = Loadable(() => import('./pages/mailingTypes/MailingTypeEdit'));
const LoadableMailingTypeCreate = Loadable(() => import('./pages/mailingTypes/MailingTypeCreate'));
const LoadableMailingTypeList = Loadable(() => import('./pages/mailingTypes/MailingTypeList'));
const LoadableManagerLoginShow = Loadable(() => import('./pages/managerLogins/ManagerLoginShow'));
const LoadableManagerLoginEdit = Loadable(() => import('./pages/managerLogins/ManagerLoginEdit'));
const LoadableManagerLoginCreate = Loadable(() => import('./pages/managerLogins/ManagerLoginCreate'));
const LoadableManagerLoginList = Loadable(() => import('./pages/managerLogins/ManagerLoginList'));
const LoadableManagerShow = Loadable(() => import('./pages/managers/ManagerShow'));
const LoadableManagerEdit = Loadable(() => import('./pages/managers/ManagerEdit'));
const LoadableManagerCreate = Loadable(() => import('./pages/managers/ManagerCreate'));
const LoadableManagerList = Loadable(() => import('./pages/managers/ManagerList'));
const LoadableManagersToPermissionShow = Loadable(() => import('./pages/managersToPermissions/ManagersToPermissionShow'));
const LoadableManagersToPermissionEdit = Loadable(() => import('./pages/managersToPermissions/ManagersToPermissionEdit'));
const LoadableManagersToPermissionCreate = Loadable(() => import('./pages/managersToPermissions/ManagersToPermissionCreate'));
const LoadableManagersToPermissionList = Loadable(() => import('./pages/managersToPermissions/ManagersToPermissionList'));
const LoadableManagersToRoleShow = Loadable(() => import('./pages/managersToRoles/ManagersToRoleShow'));
const LoadableManagersToRoleEdit = Loadable(() => import('./pages/managersToRoles/ManagersToRoleEdit'));
const LoadableManagersToRoleCreate = Loadable(() => import('./pages/managersToRoles/ManagersToRoleCreate'));
const LoadableManagersToRoleList = Loadable(() => import('./pages/managersToRoles/ManagersToRoleList'));
const LoadableMessageTemplateLangVariantShow = Loadable(() => import('./pages/messageTemplateLangVariants/MessageTemplateLangVariantShow'));
const LoadableMessageTemplateLangVariantEdit = Loadable(() => import('./pages/messageTemplateLangVariants/MessageTemplateLangVariantEdit'));
const LoadableMessageTemplateLangVariantCreate = Loadable(() => import('./pages/messageTemplateLangVariants/MessageTemplateLangVariantCreate'));
const LoadableMessageTemplateLangVariantList = Loadable(() => import('./pages/messageTemplateLangVariants/MessageTemplateLangVariantList'));
const LoadableMessageTemplateShow = Loadable(() => import('./pages/messageTemplates/MessageTemplateShow'));
const LoadableMessageTemplateEdit = Loadable(() => import('./pages/messageTemplates/MessageTemplateEdit'));
const LoadableMessageTemplateCreate = Loadable(() => import('./pages/messageTemplates/MessageTemplateCreate'));
const LoadableMessageTemplateList = Loadable(() => import('./pages/messageTemplates/MessageTemplateList'));
const LoadableMessageTypeShow = Loadable(() => import('./pages/messageTypes/MessageTypeShow'));
const LoadableMessageTypeEdit = Loadable(() => import('./pages/messageTypes/MessageTypeEdit'));
const LoadableMessageTypeCreate = Loadable(() => import('./pages/messageTypes/MessageTypeCreate'));
const LoadableMessageTypeList = Loadable(() => import('./pages/messageTypes/MessageTypeList'));
const LoadablePermissionShow = Loadable(() => import('./pages/permissions/PermissionShow'));
const LoadablePermissionEdit = Loadable(() => import('./pages/permissions/PermissionEdit'));
const LoadablePermissionCreate = Loadable(() => import('./pages/permissions/PermissionCreate'));
const LoadablePermissionList = Loadable(() => import('./pages/permissions/PermissionList'));
const LoadableRoleShow = Loadable(() => import('./pages/roles/RoleShow'));
const LoadableRoleEdit = Loadable(() => import('./pages/roles/RoleEdit'));
const LoadableRoleCreate = Loadable(() => import('./pages/roles/RoleCreate'));
const LoadableRoleList = Loadable(() => import('./pages/roles/RoleList'));
const LoadableRolesToPermissionShow = Loadable(() => import('./pages/rolesToPermissions/RolesToPermissionShow'));
const LoadableRolesToPermissionEdit = Loadable(() => import('./pages/rolesToPermissions/RolesToPermissionEdit'));
const LoadableRolesToPermissionCreate = Loadable(() => import('./pages/rolesToPermissions/RolesToPermissionCreate'));
const LoadableRolesToPermissionList = Loadable(() => import('./pages/rolesToPermissions/RolesToPermissionList'));
const LoadableStatShow = Loadable(() => import('./pages/stats/StatShow'));
const LoadableStatEdit = Loadable(() => import('./pages/stats/StatEdit'));
const LoadableStatCreate = Loadable(() => import('./pages/stats/StatCreate'));
const LoadableStatList = Loadable(() => import('./pages/stats/StatList'));
const LoadableTagShow = Loadable(() => import('./pages/tags/TagShow'));
const LoadableTagEdit = Loadable(() => import('./pages/tags/TagEdit'));
const LoadableTagCreate = Loadable(() => import('./pages/tags/TagCreate'));
const LoadableTagList = Loadable(() => import('./pages/tags/TagList'));
const LoadableTemplateStyleShow = Loadable(() => import('./pages/templateStyles/TemplateStyleShow'));
const LoadableTemplateStyleEdit = Loadable(() => import('./pages/templateStyles/TemplateStyleEdit'));
const LoadableTemplateStyleCreate = Loadable(() => import('./pages/templateStyles/TemplateStyleCreate'));
const LoadableTemplateStyleList = Loadable(() => import('./pages/templateStyles/TemplateStyleList'));
const LoadableTenantShow = Loadable(() => import('./pages/tenants/TenantShow'));
const LoadableTenantEdit = Loadable(() => import('./pages/tenants/TenantEdit'));
const LoadableTenantCreate = Loadable(() => import('./pages/tenants/TenantCreate'));
const LoadableTenantList = Loadable(() => import('./pages/tenants/TenantList'));
const LoadableUnitShow = Loadable(() => import('./pages/units/UnitShow'));
const LoadableUnitEdit = Loadable(() => import('./pages/units/UnitEdit'));
const LoadableUnitCreate = Loadable(() => import('./pages/units/UnitCreate'));
const LoadableUnitList = Loadable(() => import('./pages/units/UnitList'));
const LoadableUserShow = Loadable(() => import('./pages/users/UserShow'));
const LoadableUserEdit = Loadable(() => import('./pages/users/UserEdit'));
const LoadableUserCreate = Loadable(() => import('./pages/users/UserCreate'));
const LoadableUserList = Loadable(() => import('./pages/users/UserList'));

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
        options={{label: translate('catalogs.admRefreshTokens.title.singular')}}
        recordRepresentation='id'
      />,
      <Resource
        key='aggregateTrackings'
        name='aggregateTrackings'
        show={hasPermission(permissions, 'aggregateTrackings.get') ? LoadableAggregateTrackingShow : undefined}
        edit={hasPermission(permissions, 'aggregateTrackings.update') ? LoadableAggregateTrackingEdit : undefined}
        create={hasPermission(permissions, 'aggregateTrackings.create') ? LoadableAggregateTrackingCreate : undefined}
        list={hasPermission(permissions, 'aggregateTrackings.all') ? LoadableAggregateTrackingList : undefined}
        options={{label: translate('infoRegistries.aggregateTrackings.title.singular')}}
        recordRepresentation='id'
      />,
      <Resource
        key='appLogins'
        name='appLogins'
        show={hasPermission(permissions, 'appLogins.get') ? LoadableAppLoginShow : undefined}
        edit={hasPermission(permissions, 'appLogins.update') ? LoadableAppLoginEdit : undefined}
        create={hasPermission(permissions, 'appLogins.create') ? LoadableAppLoginCreate : undefined}
        list={hasPermission(permissions, 'appLogins.all') ? LoadableAppLoginList : undefined}
        options={{label: translate('catalogs.appLogins.title.singular')}}
        recordRepresentation='id'
      />,
      <Resource
        key='appRefreshTokens'
        name='appRefreshTokens'
        show={hasPermission(permissions, 'appRefreshTokens.get') ? LoadableAppRefreshTokenShow : undefined}
        edit={hasPermission(permissions, 'appRefreshTokens.update') ? LoadableAppRefreshTokenEdit : undefined}
        create={hasPermission(permissions, 'appRefreshTokens.create') ? LoadableAppRefreshTokenCreate : undefined}
        list={hasPermission(permissions, 'appRefreshTokens.all') ? LoadableAppRefreshTokenList : undefined}
        options={{label: translate('catalogs.appRefreshTokens.title.singular')}}
        recordRepresentation='id'
      />,
      <Resource
        key='auditLogActionTypes'
        name='auditLogActionTypes'
        show={hasPermission(permissions, 'auditLogActionTypes.get') ? LoadableAuditLogActionTypeShow : undefined}
        edit={hasPermission(permissions, 'auditLogActionTypes.update') ? LoadableAuditLogActionTypeEdit : undefined}
        create={hasPermission(permissions, 'auditLogActionTypes.create') ? LoadableAuditLogActionTypeCreate : undefined}
        list={hasPermission(permissions, 'auditLogActionTypes.all') ? LoadableAuditLogActionTypeList : undefined}
        options={{label: translate('catalogs.auditLogActionTypes.title.singular')}}
        recordRepresentation='title'
      />,
      <Resource
        key='auditLogs'
        name='auditLogs'
        show={hasPermission(permissions, 'auditLogs.get') ? LoadableAuditLogShow : undefined}
        edit={undefined}
        create={undefined}
        list={hasPermission(permissions, 'auditLogs.all') ? LoadableAuditLogList : undefined}
        options={{label: translate('catalogs.auditLogs.title.singular')}}
        recordRepresentation='title'
      />,
      <Resource
        key='autogenerationHistoryEntries'
        name='autogenerationHistoryEntries'
        show={hasPermission(permissions, 'autogenerationHistoryEntries.get') ? LoadableAutogenerationHistoryEntryShow : undefined}
        edit={hasPermission(permissions, 'autogenerationHistoryEntries.update') ? LoadableAutogenerationHistoryEntryEdit : undefined}
        create={hasPermission(permissions, 'autogenerationHistoryEntries.create') ? LoadableAutogenerationHistoryEntryCreate : undefined}
        list={hasPermission(permissions, 'autogenerationHistoryEntries.all') ? LoadableAutogenerationHistoryEntryList : undefined}
        options={{label: translate('catalogs.autogenerationHistoryEntries.title.singular')}}
        recordRepresentation='id'
      />,
      <Resource
        key='autogenerationRules'
        name='autogenerationRules'
        show={hasPermission(permissions, 'autogenerationRules.get') ? LoadableAutogenerationRuleShow : undefined}
        edit={hasPermission(permissions, 'autogenerationRules.update') ? LoadableAutogenerationRuleEdit : undefined}
        create={hasPermission(permissions, 'autogenerationRules.create') ? LoadableAutogenerationRuleCreate : undefined}
        list={hasPermission(permissions, 'autogenerationRules.all') ? LoadableAutogenerationRuleList : undefined}
        options={{label: translate('catalogs.autogenerationRules.title.singular')}}
        recordRepresentation='title'
      />,
      <Resource
        key='configurationVariables'
        name='configurationVariables'
        show={hasPermission(permissions, 'configurationVariables.get') ? LoadableConfigurationVariableShow : undefined}
        edit={hasPermission(permissions, 'configurationVariables.update') ? LoadableConfigurationVariableEdit : undefined}
        create={hasPermission(permissions, 'configurationVariables.create') ? LoadableConfigurationVariableCreate : undefined}
        list={hasPermission(permissions, 'configurationVariables.all') ? LoadableConfigurationVariableList : undefined}
        options={{label: translate('catalogs.configurationVariables.title.singular')}}
        recordRepresentation='id'
      />,
      <Resource
        key='delegations'
        name='delegations'
        show={hasPermission(permissions, 'delegations.get') ? LoadableDelegationShow : undefined}
        edit={hasPermission(permissions, 'delegations.update') ? LoadableDelegationEdit : undefined}
        create={hasPermission(permissions, 'delegations.create') ? LoadableDelegationCreate : undefined}
        list={hasPermission(permissions, 'delegations.all') ? LoadableDelegationList : undefined}
        options={{label: translate('catalogs.delegations.title.singular')}}
        recordRepresentation='id'
      />,
      <Resource
        key='entities'
        name='entities'
        show={hasPermission(permissions, 'entities.get') ? LoadableEntityShow : undefined}
        edit={hasPermission(permissions, 'entities.update') ? LoadableEntityEdit : undefined}
        create={hasPermission(permissions, 'entities.create') ? LoadableEntityCreate : undefined}
        list={hasPermission(permissions, 'entities.all') ? LoadableEntityList : undefined}
        options={{label: translate('catalogs.entities.title.singular')}}
        recordRepresentation='title'
      />,
      <Resource
        key='files'
        name='files'
        show={hasPermission(permissions, 'files.get') ? LoadableFileShow : undefined}
        edit={hasPermission(permissions, 'files.update') ? LoadableFileEdit : undefined}
        create={hasPermission(permissions, 'files.create') ? LoadableFileCreate : undefined}
        list={hasPermission(permissions, 'files.all') ? LoadableFileList : undefined}
        options={{label: translate('catalogs.files.title.singular')}}
        recordRepresentation='originalName'
      />,
      <Resource
        key='languages'
        name='languages'
        show={hasPermission(permissions, 'languages.get') ? LoadableLanguageShow : undefined}
        edit={hasPermission(permissions, 'languages.update') ? LoadableLanguageEdit : undefined}
        create={hasPermission(permissions, 'languages.create') ? LoadableLanguageCreate : undefined}
        list={hasPermission(permissions, 'languages.all') ? LoadableLanguageList : undefined}
        options={{label: translate('catalogs.languages.title.singular')}}
        recordRepresentation='title'
      />,
      <Resource
        key='mailingCampaignStatuses'
        name='mailingCampaignStatuses'
        show={hasPermission(permissions, 'mailingCampaignStatuses.get') ? LoadableMailingCampaignStatusShow : undefined}
        edit={hasPermission(permissions, 'mailingCampaignStatuses.update') ? LoadableMailingCampaignStatusEdit : undefined}
        create={hasPermission(permissions, 'mailingCampaignStatuses.create') ? LoadableMailingCampaignStatusCreate : undefined}
        list={hasPermission(permissions, 'mailingCampaignStatuses.all') ? LoadableMailingCampaignStatusList : undefined}
        options={{label: translate('catalogs.mailingCampaignStatuses.title.singular')}}
        recordRepresentation='title'
      />,
      <Resource
        key='mailingCampaigns'
        name='mailingCampaigns'
        show={hasPermission(permissions, 'mailingCampaigns.get') ? LoadableMailingCampaignShow : undefined}
        edit={hasPermission(permissions, 'mailingCampaigns.update') ? LoadableMailingCampaignEdit : undefined}
        create={hasPermission(permissions, 'mailingCampaigns.create') ? LoadableMailingCampaignCreate : undefined}
        list={hasPermission(permissions, 'mailingCampaigns.all') ? LoadableMailingCampaignList : undefined}
        options={{label: translate('catalogs.mailingCampaigns.title.singular')}}
        recordRepresentation='title'
      />,
      <Resource
        key='mailingMessageStatuses'
        name='mailingMessageStatuses'
        show={hasPermission(permissions, 'mailingMessageStatuses.get') ? LoadableMailingMessageStatusShow : undefined}
        edit={hasPermission(permissions, 'mailingMessageStatuses.update') ? LoadableMailingMessageStatusEdit : undefined}
        create={hasPermission(permissions, 'mailingMessageStatuses.create') ? LoadableMailingMessageStatusCreate : undefined}
        list={hasPermission(permissions, 'mailingMessageStatuses.all') ? LoadableMailingMessageStatusList : undefined}
        options={{label: translate('catalogs.mailingMessageStatuses.title.singular')}}
        recordRepresentation='title'
      />,
      <Resource
        key='mailingMessages'
        name='mailingMessages'
        show={hasPermission(permissions, 'mailingMessages.get') ? LoadableMailingMessageShow : undefined}
        edit={hasPermission(permissions, 'mailingMessages.update') ? LoadableMailingMessageEdit : undefined}
        create={hasPermission(permissions, 'mailingMessages.create') ? LoadableMailingMessageCreate : undefined}
        list={hasPermission(permissions, 'mailingMessages.all') ? LoadableMailingMessageList : undefined}
        options={{label: translate('catalogs.mailingMessages.title.singular')}}
        recordRepresentation='id'
      />,
      <Resource
        key='mailingTypes'
        name='mailingTypes'
        show={hasPermission(permissions, 'mailingTypes.get') ? LoadableMailingTypeShow : undefined}
        edit={hasPermission(permissions, 'mailingTypes.update') ? LoadableMailingTypeEdit : undefined}
        create={hasPermission(permissions, 'mailingTypes.create') ? LoadableMailingTypeCreate : undefined}
        list={hasPermission(permissions, 'mailingTypes.all') ? LoadableMailingTypeList : undefined}
        options={{label: translate('catalogs.mailingTypes.title.singular')}}
        recordRepresentation='title'
      />,
      <Resource
        key='managerLogins'
        name='managerLogins'
        show={hasPermission(permissions, 'managerLogins.get') ? LoadableManagerLoginShow : undefined}
        edit={hasPermission(permissions, 'managerLogins.update') ? LoadableManagerLoginEdit : undefined}
        create={hasPermission(permissions, 'managerLogins.create') ? LoadableManagerLoginCreate : undefined}
        list={hasPermission(permissions, 'managerLogins.all') ? LoadableManagerLoginList : undefined}
        options={{label: translate('catalogs.managerLogins.title.singular')}}
        recordRepresentation='id'
      />,
      <Resource
        key='managers'
        name='managers'
        show={hasPermission(permissions, 'managers.get') ? LoadableManagerShow : undefined}
        edit={hasPermission(permissions, 'managers.update') ? LoadableManagerEdit : undefined}
        create={hasPermission(permissions, 'managers.create') ? LoadableManagerCreate : undefined}
        list={hasPermission(permissions, 'managers.all') ? LoadableManagerList : undefined}
        options={{label: translate('catalogs.managers.title.singular')}}
        recordRepresentation='title'
      />,
      <Resource
        key='managersToPermissions'
        name='managersToPermissions'
        show={hasPermission(permissions, 'managersToPermissions.get') ? LoadableManagersToPermissionShow : undefined}
        edit={hasPermission(permissions, 'managersToPermissions.update') ? LoadableManagersToPermissionEdit : undefined}
        create={hasPermission(permissions, 'managersToPermissions.create') ? LoadableManagersToPermissionCreate : undefined}
        list={hasPermission(permissions, 'managersToPermissions.all') ? LoadableManagersToPermissionList : undefined}
        options={{label: translate('catalogs.managersToPermissions.title.singular')}}
        recordRepresentation='id'
      />,
      <Resource
        key='managersToRoles'
        name='managersToRoles'
        show={hasPermission(permissions, 'managersToRoles.get') ? LoadableManagersToRoleShow : undefined}
        edit={hasPermission(permissions, 'managersToRoles.update') ? LoadableManagersToRoleEdit : undefined}
        create={hasPermission(permissions, 'managersToRoles.create') ? LoadableManagersToRoleCreate : undefined}
        list={hasPermission(permissions, 'managersToRoles.all') ? LoadableManagersToRoleList : undefined}
        options={{label: translate('catalogs.managersToRoles.title.singular')}}
        recordRepresentation='id'
      />,
      <Resource
        key='messageTemplateLangVariants'
        name='messageTemplateLangVariants'
        show={hasPermission(permissions, 'messageTemplateLangVariants.get') ? LoadableMessageTemplateLangVariantShow : undefined}
        edit={hasPermission(permissions, 'messageTemplateLangVariants.update') ? LoadableMessageTemplateLangVariantEdit : undefined}
        create={hasPermission(permissions, 'messageTemplateLangVariants.create') ? LoadableMessageTemplateLangVariantCreate : undefined}
        list={hasPermission(permissions, 'messageTemplateLangVariants.all') ? LoadableMessageTemplateLangVariantList : undefined}
        options={{label: translate('catalogs.messageTemplateLangVariants.title.singular')}}
        recordRepresentation='title'
      />,
      <Resource
        key='messageTemplates'
        name='messageTemplates'
        show={hasPermission(permissions, 'messageTemplates.get') ? LoadableMessageTemplateShow : undefined}
        edit={hasPermission(permissions, 'messageTemplates.update') ? LoadableMessageTemplateEdit : undefined}
        create={hasPermission(permissions, 'messageTemplates.create') ? LoadableMessageTemplateCreate : undefined}
        list={hasPermission(permissions, 'messageTemplates.all') ? LoadableMessageTemplateList : undefined}
        options={{label: translate('catalogs.messageTemplates.title.singular')}}
        recordRepresentation='title'
      />,
      <Resource
        key='messageTypes'
        name='messageTypes'
        show={hasPermission(permissions, 'messageTypes.get') ? LoadableMessageTypeShow : undefined}
        edit={hasPermission(permissions, 'messageTypes.update') ? LoadableMessageTypeEdit : undefined}
        create={hasPermission(permissions, 'messageTypes.create') ? LoadableMessageTypeCreate : undefined}
        list={hasPermission(permissions, 'messageTypes.all') ? LoadableMessageTypeList : undefined}
        options={{label: translate('catalogs.messageTypes.title.singular')}}
        recordRepresentation='title'
      />,
      <Resource
        key='permissions'
        name='permissions'
        show={hasPermission(permissions, 'permissions.get') ? LoadablePermissionShow : undefined}
        edit={hasPermission(permissions, 'permissions.update') ? LoadablePermissionEdit : undefined}
        create={hasPermission(permissions, 'permissions.create') ? LoadablePermissionCreate : undefined}
        list={hasPermission(permissions, 'permissions.all') ? LoadablePermissionList : undefined}
        options={{label: translate('catalogs.permissions.title.singular')}}
        recordRepresentation='title'
      />,
      <Resource
        key='roles'
        name='roles'
        show={hasPermission(permissions, 'roles.get') ? LoadableRoleShow : undefined}
        edit={hasPermission(permissions, 'roles.update') ? LoadableRoleEdit : undefined}
        create={hasPermission(permissions, 'roles.create') ? LoadableRoleCreate : undefined}
        list={hasPermission(permissions, 'roles.all') ? LoadableRoleList : undefined}
        options={{label: translate('catalogs.roles.title.singular')}}
        recordRepresentation='title'
      />,
      <Resource
        key='rolesToPermissions'
        name='rolesToPermissions'
        show={hasPermission(permissions, 'rolesToPermissions.get') ? LoadableRolesToPermissionShow : undefined}
        edit={hasPermission(permissions, 'rolesToPermissions.update') ? LoadableRolesToPermissionEdit : undefined}
        create={hasPermission(permissions, 'rolesToPermissions.create') ? LoadableRolesToPermissionCreate : undefined}
        list={hasPermission(permissions, 'rolesToPermissions.all') ? LoadableRolesToPermissionList : undefined}
        options={{label: translate('catalogs.rolesToPermissions.title.singular')}}
        recordRepresentation='id'
      />,
      <Resource
        key='stats'
        name='stats'
        show={hasPermission(permissions, 'stats.get') ? LoadableStatShow : undefined}
        edit={hasPermission(permissions, 'stats.update') ? LoadableStatEdit : undefined}
        create={hasPermission(permissions, 'stats.create') ? LoadableStatCreate : undefined}
        list={hasPermission(permissions, 'stats.all') ? LoadableStatList : undefined}
        options={{label: translate('catalogs.stats.title.singular')}}
        recordRepresentation='id'
      />,
      <Resource
        key='tags'
        name='tags'
        show={hasPermission(permissions, 'tags.get') ? LoadableTagShow : undefined}
        edit={hasPermission(permissions, 'tags.update') ? LoadableTagEdit : undefined}
        create={hasPermission(permissions, 'tags.create') ? LoadableTagCreate : undefined}
        list={hasPermission(permissions, 'tags.all') ? LoadableTagList : undefined}
        options={{label: translate('catalogs.tags.title.singular')}}
        recordRepresentation='id'
      />,
      <Resource
        key='templateStyles'
        name='templateStyles'
        show={hasPermission(permissions, 'templateStyles.get') ? LoadableTemplateStyleShow : undefined}
        edit={hasPermission(permissions, 'templateStyles.update') ? LoadableTemplateStyleEdit : undefined}
        create={hasPermission(permissions, 'templateStyles.create') ? LoadableTemplateStyleCreate : undefined}
        list={hasPermission(permissions, 'templateStyles.all') ? LoadableTemplateStyleList : undefined}
        options={{label: translate('catalogs.templateStyles.title.singular')}}
        recordRepresentation='title'
      />,
      <Resource
        key='tenants'
        name='tenants'
        show={hasPermission(permissions, 'tenants.get') ? LoadableTenantShow : undefined}
        edit={hasPermission(permissions, 'tenants.update') ? LoadableTenantEdit : undefined}
        create={hasPermission(permissions, 'tenants.create') ? LoadableTenantCreate : undefined}
        list={hasPermission(permissions, 'tenants.all') ? LoadableTenantList : undefined}
        options={{label: translate('catalogs.tenants.title.singular')}}
        recordRepresentation='title'
      />,
      <Resource
        key='units'
        name='units'
        show={hasPermission(permissions, 'units.get') ? LoadableUnitShow : undefined}
        edit={hasPermission(permissions, 'units.update') ? LoadableUnitEdit : undefined}
        create={hasPermission(permissions, 'units.create') ? LoadableUnitCreate : undefined}
        list={hasPermission(permissions, 'units.all') ? LoadableUnitList : undefined}
        options={{label: translate('catalogs.units.title.singular')}}
        recordRepresentation='title'
      />,
      <Resource
        key='users'
        name='users'
        show={hasPermission(permissions, 'users.get') ? LoadableUserShow : undefined}
        edit={hasPermission(permissions, 'users.update') ? LoadableUserEdit : undefined}
        create={hasPermission(permissions, 'users.create') ? LoadableUserCreate : undefined}
        list={hasPermission(permissions, 'users.all') ? LoadableUserList : undefined}
        options={{label: translate('catalogs.users.title.singular')}}
        recordRepresentation='title'
      />,
    ] :
    []
);
