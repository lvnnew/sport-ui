// DO NOT EDIT! THIS IS GENERATED FILE
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
const LoadableClubShow = Loadable(() => import('./pages/clubs/ClubShow'));
const LoadableClubEdit = Loadable(() => import('./pages/clubs/ClubEdit'));
const LoadableClubCreate = Loadable(() => import('./pages/clubs/ClubCreate'));
const LoadableClubList = Loadable(() => import('./pages/clubs/ClubList'));
const LoadableCompetitionShow = Loadable(() => import('./pages/competitions/CompetitionShow'));
const LoadableCompetitionEdit = Loadable(() => import('./pages/competitions/CompetitionEdit'));
const LoadableCompetitionCreate = Loadable(() => import('./pages/competitions/CompetitionCreate'));
const LoadableCompetitionList = Loadable(() => import('./pages/competitions/CompetitionList'));
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
const LoadableEntitiesTrackingShow = Loadable(() => import('./pages/entitiesTrackings/EntitiesTrackingShow'));
const LoadableEntitiesTrackingEdit = Loadable(() => import('./pages/entitiesTrackings/EntitiesTrackingEdit'));
const LoadableEntitiesTrackingCreate = Loadable(() => import('./pages/entitiesTrackings/EntitiesTrackingCreate'));
const LoadableEntitiesTrackingList = Loadable(() => import('./pages/entitiesTrackings/EntitiesTrackingList'));
const LoadableEventTypeCategoryShow = Loadable(() => import('./pages/eventTypeCategories/EventTypeCategoryShow'));
const LoadableEventTypeCategoryEdit = Loadable(() => import('./pages/eventTypeCategories/EventTypeCategoryEdit'));
const LoadableEventTypeCategoryCreate = Loadable(() => import('./pages/eventTypeCategories/EventTypeCategoryCreate'));
const LoadableEventTypeCategoryList = Loadable(() => import('./pages/eventTypeCategories/EventTypeCategoryList'));
const LoadableEventTypeShow = Loadable(() => import('./pages/eventTypes/EventTypeShow'));
const LoadableEventTypeEdit = Loadable(() => import('./pages/eventTypes/EventTypeEdit'));
const LoadableEventTypeCreate = Loadable(() => import('./pages/eventTypes/EventTypeCreate'));
const LoadableEventTypeList = Loadable(() => import('./pages/eventTypes/EventTypeList'));
const LoadableEventShow = Loadable(() => import('./pages/events/EventShow'));
const LoadableEventEdit = Loadable(() => import('./pages/events/EventEdit'));
const LoadableEventCreate = Loadable(() => import('./pages/events/EventCreate'));
const LoadableEventList = Loadable(() => import('./pages/events/EventList'));
const LoadableFileShow = Loadable(() => import('./pages/files/FileShow'));
const LoadableFileEdit = Loadable(() => import('./pages/files/FileEdit'));
const LoadableFileCreate = Loadable(() => import('./pages/files/FileCreate'));
const LoadableFileList = Loadable(() => import('./pages/files/FileList'));
const LoadableGlossaryShow = Loadable(() => import('./pages/glossaries/GlossaryShow'));
const LoadableGlossaryEdit = Loadable(() => import('./pages/glossaries/GlossaryEdit'));
const LoadableGlossaryCreate = Loadable(() => import('./pages/glossaries/GlossaryCreate'));
const LoadableGlossaryList = Loadable(() => import('./pages/glossaries/GlossaryList'));
const LoadableHistoryOfPlayerRoleShow = Loadable(() => import('./pages/historyOfPlayerRoles/HistoryOfPlayerRoleShow'));
const LoadableHistoryOfPlayerRoleEdit = Loadable(() => import('./pages/historyOfPlayerRoles/HistoryOfPlayerRoleEdit'));
const LoadableHistoryOfPlayerRoleCreate = Loadable(() => import('./pages/historyOfPlayerRoles/HistoryOfPlayerRoleCreate'));
const LoadableHistoryOfPlayerRoleList = Loadable(() => import('./pages/historyOfPlayerRoles/HistoryOfPlayerRoleList'));
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
const LoadableManagerLoginTypeShow = Loadable(() => import('./pages/managerLoginTypes/ManagerLoginTypeShow'));
const LoadableManagerLoginTypeEdit = Loadable(() => import('./pages/managerLoginTypes/ManagerLoginTypeEdit'));
const LoadableManagerLoginTypeCreate = Loadable(() => import('./pages/managerLoginTypes/ManagerLoginTypeCreate'));
const LoadableManagerLoginTypeList = Loadable(() => import('./pages/managerLoginTypes/ManagerLoginTypeList'));
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
const LoadableMatchPeriodMarkupShow = Loadable(() => import('./pages/matchPeriodMarkups/MatchPeriodMarkupShow'));
const LoadableMatchPeriodMarkupEdit = Loadable(() => import('./pages/matchPeriodMarkups/MatchPeriodMarkupEdit'));
const LoadableMatchPeriodMarkupCreate = Loadable(() => import('./pages/matchPeriodMarkups/MatchPeriodMarkupCreate'));
const LoadableMatchPeriodMarkupList = Loadable(() => import('./pages/matchPeriodMarkups/MatchPeriodMarkupList'));
const LoadableMatchRequestShow = Loadable(() => import('./pages/matchRequests/MatchRequestShow'));
const LoadableMatchRequestEdit = Loadable(() => import('./pages/matchRequests/MatchRequestEdit'));
const LoadableMatchRequestCreate = Loadable(() => import('./pages/matchRequests/MatchRequestCreate'));
const LoadableMatchRequestList = Loadable(() => import('./pages/matchRequests/MatchRequestList'));
const LoadableMatchStatusShow = Loadable(() => import('./pages/matchStatuses/MatchStatusShow'));
const LoadableMatchStatusEdit = Loadable(() => import('./pages/matchStatuses/MatchStatusEdit'));
const LoadableMatchStatusCreate = Loadable(() => import('./pages/matchStatuses/MatchStatusCreate'));
const LoadableMatchStatusList = Loadable(() => import('./pages/matchStatuses/MatchStatusList'));
const LoadableMatchVideoShow = Loadable(() => import('./pages/matchVideos/MatchVideoShow'));
const LoadableMatchVideoEdit = Loadable(() => import('./pages/matchVideos/MatchVideoEdit'));
const LoadableMatchVideoCreate = Loadable(() => import('./pages/matchVideos/MatchVideoCreate'));
const LoadableMatchVideoList = Loadable(() => import('./pages/matchVideos/MatchVideoList'));
const LoadableMatchShow = Loadable(() => import('./pages/matches/MatchShow'));
const LoadableMatchEdit = Loadable(() => import('./pages/matches/MatchEdit'));
const LoadableMatchCreate = Loadable(() => import('./pages/matches/MatchCreate'));
const LoadableMatchList = Loadable(() => import('./pages/matches/MatchList'));

export function resourcesChunk0(translate: Translate, permissions: string[]) {
  return [
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
      key='clubs'
      name='clubs'
      show={hasPermission(permissions, 'clubs.get') ? LoadableClubShow : undefined}
      edit={hasPermission(permissions, 'clubs.update') ? LoadableClubEdit : undefined}
      create={hasPermission(permissions, 'clubs.create') ? LoadableClubCreate : undefined}
      list={hasPermission(permissions, 'clubs.all') ? LoadableClubList : undefined}
      options={{label: translate('catalogs.clubs.title.singular')}}
      recordRepresentation='title'
    />,
    <Resource
      key='competitions'
      name='competitions'
      show={hasPermission(permissions, 'competitions.get') ? LoadableCompetitionShow : undefined}
      edit={hasPermission(permissions, 'competitions.update') ? LoadableCompetitionEdit : undefined}
      create={hasPermission(permissions, 'competitions.create') ? LoadableCompetitionCreate : undefined}
      list={hasPermission(permissions, 'competitions.all') ? LoadableCompetitionList : undefined}
      options={{label: translate('catalogs.competitions.title.singular')}}
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
      key='entitiesTrackings'
      name='entitiesTrackings'
      show={hasPermission(permissions, 'entitiesTrackings.get') ? LoadableEntitiesTrackingShow : undefined}
      edit={hasPermission(permissions, 'entitiesTrackings.update') ? LoadableEntitiesTrackingEdit : undefined}
      create={hasPermission(permissions, 'entitiesTrackings.create') ? LoadableEntitiesTrackingCreate : undefined}
      list={hasPermission(permissions, 'entitiesTrackings.all') ? LoadableEntitiesTrackingList : undefined}
      options={{label: translate('catalogs.entitiesTrackings.title.singular')}}
      recordRepresentation='id'
    />,
    <Resource
      key='eventTypeCategories'
      name='eventTypeCategories'
      show={hasPermission(permissions, 'eventTypeCategories.get') ? LoadableEventTypeCategoryShow : undefined}
      edit={hasPermission(permissions, 'eventTypeCategories.update') ? LoadableEventTypeCategoryEdit : undefined}
      create={hasPermission(permissions, 'eventTypeCategories.create') ? LoadableEventTypeCategoryCreate : undefined}
      list={hasPermission(permissions, 'eventTypeCategories.all') ? LoadableEventTypeCategoryList : undefined}
      options={{label: translate('catalogs.eventTypeCategories.title.singular')}}
      recordRepresentation='title'
    />,
    <Resource
      key='eventTypes'
      name='eventTypes'
      show={hasPermission(permissions, 'eventTypes.get') ? LoadableEventTypeShow : undefined}
      edit={hasPermission(permissions, 'eventTypes.update') ? LoadableEventTypeEdit : undefined}
      create={hasPermission(permissions, 'eventTypes.create') ? LoadableEventTypeCreate : undefined}
      list={hasPermission(permissions, 'eventTypes.all') ? LoadableEventTypeList : undefined}
      options={{label: translate('catalogs.eventTypes.title.singular')}}
      recordRepresentation='title'
    />,
    <Resource
      key='events'
      name='events'
      show={hasPermission(permissions, 'events.get') ? LoadableEventShow : undefined}
      edit={hasPermission(permissions, 'events.update') ? LoadableEventEdit : undefined}
      create={hasPermission(permissions, 'events.create') ? LoadableEventCreate : undefined}
      list={hasPermission(permissions, 'events.all') ? LoadableEventList : undefined}
      options={{label: translate('documents.events.title.singular')}}
      recordRepresentation='id'
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
      key='glossaries'
      name='glossaries'
      show={hasPermission(permissions, 'glossaries.get') ? LoadableGlossaryShow : undefined}
      edit={hasPermission(permissions, 'glossaries.update') ? LoadableGlossaryEdit : undefined}
      create={hasPermission(permissions, 'glossaries.create') ? LoadableGlossaryCreate : undefined}
      list={hasPermission(permissions, 'glossaries.all') ? LoadableGlossaryList : undefined}
      options={{label: translate('catalogs.glossaries.title.singular')}}
      recordRepresentation='id'
    />,
    <Resource
      key='historyOfPlayerRoles'
      name='historyOfPlayerRoles'
      show={hasPermission(permissions, 'historyOfPlayerRoles.get') ? LoadableHistoryOfPlayerRoleShow : undefined}
      edit={hasPermission(permissions, 'historyOfPlayerRoles.update') ? LoadableHistoryOfPlayerRoleEdit : undefined}
      create={hasPermission(permissions, 'historyOfPlayerRoles.create') ? LoadableHistoryOfPlayerRoleCreate : undefined}
      list={hasPermission(permissions, 'historyOfPlayerRoles.all') ? LoadableHistoryOfPlayerRoleList : undefined}
      options={{label: translate('catalogs.historyOfPlayerRoles.title.singular')}}
      recordRepresentation='id'
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
      key='managerLoginTypes'
      name='managerLoginTypes'
      show={hasPermission(permissions, 'managerLoginTypes.get') ? LoadableManagerLoginTypeShow : undefined}
      edit={hasPermission(permissions, 'managerLoginTypes.update') ? LoadableManagerLoginTypeEdit : undefined}
      create={hasPermission(permissions, 'managerLoginTypes.create') ? LoadableManagerLoginTypeCreate : undefined}
      list={hasPermission(permissions, 'managerLoginTypes.all') ? LoadableManagerLoginTypeList : undefined}
      options={{label: translate('catalogs.managerLoginTypes.title.singular')}}
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
      key='matchPeriodMarkups'
      name='matchPeriodMarkups'
      show={hasPermission(permissions, 'matchPeriodMarkups.get') ? LoadableMatchPeriodMarkupShow : undefined}
      edit={hasPermission(permissions, 'matchPeriodMarkups.update') ? LoadableMatchPeriodMarkupEdit : undefined}
      create={hasPermission(permissions, 'matchPeriodMarkups.create') ? LoadableMatchPeriodMarkupCreate : undefined}
      list={hasPermission(permissions, 'matchPeriodMarkups.all') ? LoadableMatchPeriodMarkupList : undefined}
      options={{label: translate('catalogs.matchPeriodMarkups.title.singular')}}
      recordRepresentation='id'
    />,
    <Resource
      key='matchRequests'
      name='matchRequests'
      show={hasPermission(permissions, 'matchRequests.get') ? LoadableMatchRequestShow : undefined}
      edit={hasPermission(permissions, 'matchRequests.update') ? LoadableMatchRequestEdit : undefined}
      create={hasPermission(permissions, 'matchRequests.create') ? LoadableMatchRequestCreate : undefined}
      list={hasPermission(permissions, 'matchRequests.all') ? LoadableMatchRequestList : undefined}
      options={{label: translate('catalogs.matchRequests.title.singular')}}
      recordRepresentation='id'
    />,
    <Resource
      key='matchStatuses'
      name='matchStatuses'
      show={hasPermission(permissions, 'matchStatuses.get') ? LoadableMatchStatusShow : undefined}
      edit={hasPermission(permissions, 'matchStatuses.update') ? LoadableMatchStatusEdit : undefined}
      create={hasPermission(permissions, 'matchStatuses.create') ? LoadableMatchStatusCreate : undefined}
      list={hasPermission(permissions, 'matchStatuses.all') ? LoadableMatchStatusList : undefined}
      options={{label: translate('catalogs.matchStatuses.title.singular')}}
      recordRepresentation='title'
    />,
    <Resource
      key='matchVideos'
      name='matchVideos'
      show={hasPermission(permissions, 'matchVideos.get') ? LoadableMatchVideoShow : undefined}
      edit={hasPermission(permissions, 'matchVideos.update') ? LoadableMatchVideoEdit : undefined}
      create={hasPermission(permissions, 'matchVideos.create') ? LoadableMatchVideoCreate : undefined}
      list={hasPermission(permissions, 'matchVideos.all') ? LoadableMatchVideoList : undefined}
      options={{label: translate('catalogs.matchVideos.title.singular')}}
      recordRepresentation='videoTitle'
    />,
    <Resource
      key='matches'
      name='matches'
      show={hasPermission(permissions, 'matches.get') ? LoadableMatchShow : undefined}
      edit={hasPermission(permissions, 'matches.update') ? LoadableMatchEdit : undefined}
      create={hasPermission(permissions, 'matches.create') ? LoadableMatchCreate : undefined}
      list={hasPermission(permissions, 'matches.all') ? LoadableMatchList : undefined}
      options={{label: translate('catalogs.matches.title.singular')}}
      recordRepresentation='title'
    />,
  ];
}
