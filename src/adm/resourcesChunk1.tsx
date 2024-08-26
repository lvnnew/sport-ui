// DO NOT EDIT! THIS IS GENERATED FILE
/* eslint-disable max-len */
import * as React from 'react';
import {Resource, Translate} from 'react-admin';
import Loadable from '../shared/Loadable';
import {hasPermission} from '../utils/permissions';

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
const LoadableOrganizatorShow = Loadable(() => import('./pages/organizators/OrganizatorShow'));
const LoadableOrganizatorEdit = Loadable(() => import('./pages/organizators/OrganizatorEdit'));
const LoadableOrganizatorCreate = Loadable(() => import('./pages/organizators/OrganizatorCreate'));
const LoadableOrganizatorList = Loadable(() => import('./pages/organizators/OrganizatorList'));
const LoadableParentShow = Loadable(() => import('./pages/parents/ParentShow'));
const LoadableParentEdit = Loadable(() => import('./pages/parents/ParentEdit'));
const LoadableParentCreate = Loadable(() => import('./pages/parents/ParentCreate'));
const LoadableParentList = Loadable(() => import('./pages/parents/ParentList'));
const LoadablePeriodTypeShow = Loadable(() => import('./pages/periodTypes/PeriodTypeShow'));
const LoadablePeriodTypeEdit = Loadable(() => import('./pages/periodTypes/PeriodTypeEdit'));
const LoadablePeriodTypeCreate = Loadable(() => import('./pages/periodTypes/PeriodTypeCreate'));
const LoadablePeriodTypeList = Loadable(() => import('./pages/periodTypes/PeriodTypeList'));
const LoadablePermissionShow = Loadable(() => import('./pages/permissions/PermissionShow'));
const LoadablePermissionEdit = Loadable(() => import('./pages/permissions/PermissionEdit'));
const LoadablePermissionCreate = Loadable(() => import('./pages/permissions/PermissionCreate'));
const LoadablePermissionList = Loadable(() => import('./pages/permissions/PermissionList'));
const LoadablePlayerAggregatedRoleShow = Loadable(() => import('./pages/playerAggregatedRoles/PlayerAggregatedRoleShow'));
const LoadablePlayerAggregatedRoleEdit = Loadable(() => import('./pages/playerAggregatedRoles/PlayerAggregatedRoleEdit'));
const LoadablePlayerAggregatedRoleCreate = Loadable(() => import('./pages/playerAggregatedRoles/PlayerAggregatedRoleCreate'));
const LoadablePlayerAggregatedRoleList = Loadable(() => import('./pages/playerAggregatedRoles/PlayerAggregatedRoleList'));
const LoadablePlayerCompetitionRatingShow = Loadable(() => import('./pages/playerCompetitionRatings/PlayerCompetitionRatingShow'));
const LoadablePlayerCompetitionRatingEdit = Loadable(() => import('./pages/playerCompetitionRatings/PlayerCompetitionRatingEdit'));
const LoadablePlayerCompetitionRatingCreate = Loadable(() => import('./pages/playerCompetitionRatings/PlayerCompetitionRatingCreate'));
const LoadablePlayerCompetitionRatingList = Loadable(() => import('./pages/playerCompetitionRatings/PlayerCompetitionRatingList'));
const LoadablePlayerForCompetitionTeamShow = Loadable(() => import('./pages/playerForCompetitionTeams/PlayerForCompetitionTeamShow'));
const LoadablePlayerForCompetitionTeamEdit = Loadable(() => import('./pages/playerForCompetitionTeams/PlayerForCompetitionTeamEdit'));
const LoadablePlayerForCompetitionTeamCreate = Loadable(() => import('./pages/playerForCompetitionTeams/PlayerForCompetitionTeamCreate'));
const LoadablePlayerForCompetitionTeamList = Loadable(() => import('./pages/playerForCompetitionTeams/PlayerForCompetitionTeamList'));
const LoadablePlayerForMatchRequestShow = Loadable(() => import('./pages/playerForMatchRequests/PlayerForMatchRequestShow'));
const LoadablePlayerForMatchRequestEdit = Loadable(() => import('./pages/playerForMatchRequests/PlayerForMatchRequestEdit'));
const LoadablePlayerForMatchRequestCreate = Loadable(() => import('./pages/playerForMatchRequests/PlayerForMatchRequestCreate'));
const LoadablePlayerForMatchRequestList = Loadable(() => import('./pages/playerForMatchRequests/PlayerForMatchRequestList'));
const LoadablePlayerForTeamMatchListShow = Loadable(() => import('./pages/playerForTeamMatchLists/PlayerForTeamMatchListShow'));
const LoadablePlayerForTeamMatchListEdit = Loadable(() => import('./pages/playerForTeamMatchLists/PlayerForTeamMatchListEdit'));
const LoadablePlayerForTeamMatchListCreate = Loadable(() => import('./pages/playerForTeamMatchLists/PlayerForTeamMatchListCreate'));
const LoadablePlayerForTeamMatchListList = Loadable(() => import('./pages/playerForTeamMatchLists/PlayerForTeamMatchListList'));
const LoadablePlayerMatchRatingShow = Loadable(() => import('./pages/playerMatchRatings/PlayerMatchRatingShow'));
const LoadablePlayerMatchRatingEdit = Loadable(() => import('./pages/playerMatchRatings/PlayerMatchRatingEdit'));
const LoadablePlayerMatchRatingCreate = Loadable(() => import('./pages/playerMatchRatings/PlayerMatchRatingCreate'));
const LoadablePlayerMatchRatingList = Loadable(() => import('./pages/playerMatchRatings/PlayerMatchRatingList'));
const LoadablePlayerRankShow = Loadable(() => import('./pages/playerRanks/PlayerRankShow'));
const LoadablePlayerRankEdit = Loadable(() => import('./pages/playerRanks/PlayerRankEdit'));
const LoadablePlayerRankCreate = Loadable(() => import('./pages/playerRanks/PlayerRankCreate'));
const LoadablePlayerRankList = Loadable(() => import('./pages/playerRanks/PlayerRankList'));
const LoadablePlayerRoleShow = Loadable(() => import('./pages/playerRoles/PlayerRoleShow'));
const LoadablePlayerRoleEdit = Loadable(() => import('./pages/playerRoles/PlayerRoleEdit'));
const LoadablePlayerRoleCreate = Loadable(() => import('./pages/playerRoles/PlayerRoleCreate'));
const LoadablePlayerRoleList = Loadable(() => import('./pages/playerRoles/PlayerRoleList'));
const LoadablePlayerShow = Loadable(() => import('./pages/players/PlayerShow'));
const LoadablePlayerEdit = Loadable(() => import('./pages/players/PlayerEdit'));
const LoadablePlayerCreate = Loadable(() => import('./pages/players/PlayerCreate'));
const LoadablePlayerList = Loadable(() => import('./pages/players/PlayerList'));
const LoadableReportForClubShow = Loadable(() => import('./pages/reportForClubs/ReportForClubShow'));
const LoadableReportForClubEdit = Loadable(() => import('./pages/reportForClubs/ReportForClubEdit'));
const LoadableReportForClubCreate = Loadable(() => import('./pages/reportForClubs/ReportForClubCreate'));
const LoadableReportForClubList = Loadable(() => import('./pages/reportForClubs/ReportForClubList'));
const LoadableReportForOrganizationShow = Loadable(() => import('./pages/reportForOrganizations/ReportForOrganizationShow'));
const LoadableReportForOrganizationEdit = Loadable(() => import('./pages/reportForOrganizations/ReportForOrganizationEdit'));
const LoadableReportForOrganizationCreate = Loadable(() => import('./pages/reportForOrganizations/ReportForOrganizationCreate'));
const LoadableReportForOrganizationList = Loadable(() => import('./pages/reportForOrganizations/ReportForOrganizationList'));
const LoadableReportForParentShow = Loadable(() => import('./pages/reportForParents/ReportForParentShow'));
const LoadableReportForParentEdit = Loadable(() => import('./pages/reportForParents/ReportForParentEdit'));
const LoadableReportForParentCreate = Loadable(() => import('./pages/reportForParents/ReportForParentCreate'));
const LoadableReportForParentList = Loadable(() => import('./pages/reportForParents/ReportForParentList'));
const LoadableReportForTeamShow = Loadable(() => import('./pages/reportForTeams/ReportForTeamShow'));
const LoadableReportForTeamEdit = Loadable(() => import('./pages/reportForTeams/ReportForTeamEdit'));
const LoadableReportForTeamCreate = Loadable(() => import('./pages/reportForTeams/ReportForTeamCreate'));
const LoadableReportForTeamList = Loadable(() => import('./pages/reportForTeams/ReportForTeamList'));
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
const LoadableTeamForCompetitionShow = Loadable(() => import('./pages/teamForCompetitions/TeamForCompetitionShow'));
const LoadableTeamForCompetitionEdit = Loadable(() => import('./pages/teamForCompetitions/TeamForCompetitionEdit'));
const LoadableTeamForCompetitionCreate = Loadable(() => import('./pages/teamForCompetitions/TeamForCompetitionCreate'));
const LoadableTeamForCompetitionList = Loadable(() => import('./pages/teamForCompetitions/TeamForCompetitionList'));
const LoadableTeamForPlayerShow = Loadable(() => import('./pages/teamForPlayers/TeamForPlayerShow'));
const LoadableTeamForPlayerEdit = Loadable(() => import('./pages/teamForPlayers/TeamForPlayerEdit'));
const LoadableTeamForPlayerCreate = Loadable(() => import('./pages/teamForPlayers/TeamForPlayerCreate'));
const LoadableTeamForPlayerList = Loadable(() => import('./pages/teamForPlayers/TeamForPlayerList'));
const LoadableTeamMatchListShow = Loadable(() => import('./pages/teamMatchLists/TeamMatchListShow'));
const LoadableTeamMatchListEdit = Loadable(() => import('./pages/teamMatchLists/TeamMatchListEdit'));
const LoadableTeamMatchListCreate = Loadable(() => import('./pages/teamMatchLists/TeamMatchListCreate'));
const LoadableTeamMatchListList = Loadable(() => import('./pages/teamMatchLists/TeamMatchListList'));
const LoadableTeamMatchReportShow = Loadable(() => import('./pages/teamMatchReports/TeamMatchReportShow'));
const LoadableTeamMatchReportEdit = Loadable(() => import('./pages/teamMatchReports/TeamMatchReportEdit'));
const LoadableTeamMatchReportCreate = Loadable(() => import('./pages/teamMatchReports/TeamMatchReportCreate'));
const LoadableTeamMatchReportList = Loadable(() => import('./pages/teamMatchReports/TeamMatchReportList'));
const LoadableTeamShow = Loadable(() => import('./pages/teams/TeamShow'));
const LoadableTeamEdit = Loadable(() => import('./pages/teams/TeamEdit'));
const LoadableTeamCreate = Loadable(() => import('./pages/teams/TeamCreate'));
const LoadableTeamList = Loadable(() => import('./pages/teams/TeamList'));
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
const LoadableWscContactShow = Loadable(() => import('./pages/wscContacts/WscContactShow'));
const LoadableWscContactEdit = Loadable(() => import('./pages/wscContacts/WscContactEdit'));
const LoadableWscContactCreate = Loadable(() => import('./pages/wscContacts/WscContactCreate'));
const LoadableWscContactList = Loadable(() => import('./pages/wscContacts/WscContactList'));
const LoadableWscMessageShow = Loadable(() => import('./pages/wscMessages/WscMessageShow'));
const LoadableWscMessageEdit = Loadable(() => import('./pages/wscMessages/WscMessageEdit'));
const LoadableWscMessageCreate = Loadable(() => import('./pages/wscMessages/WscMessageCreate'));
const LoadableWscMessageList = Loadable(() => import('./pages/wscMessages/WscMessageList'));
const LoadableWscUserShow = Loadable(() => import('./pages/wscUsers/WscUserShow'));
const LoadableWscUserEdit = Loadable(() => import('./pages/wscUsers/WscUserEdit'));
const LoadableWscUserCreate = Loadable(() => import('./pages/wscUsers/WscUserCreate'));
const LoadableWscUserList = Loadable(() => import('./pages/wscUsers/WscUserList'));

export function resourcesChunk1(translate: Translate, permissions: string[]) {
  return [
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
      key='organizators'
      name='organizators'
      show={hasPermission(permissions, 'organizators.get') ? LoadableOrganizatorShow : undefined}
      edit={hasPermission(permissions, 'organizators.update') ? LoadableOrganizatorEdit : undefined}
      create={hasPermission(permissions, 'organizators.create') ? LoadableOrganizatorCreate : undefined}
      list={hasPermission(permissions, 'organizators.all') ? LoadableOrganizatorList : undefined}
      options={{label: translate('catalogs.organizators.title.singular')}}
      recordRepresentation='title'
    />,
    <Resource
      key='parents'
      name='parents'
      show={hasPermission(permissions, 'parents.get') ? LoadableParentShow : undefined}
      edit={hasPermission(permissions, 'parents.update') ? LoadableParentEdit : undefined}
      create={hasPermission(permissions, 'parents.create') ? LoadableParentCreate : undefined}
      list={hasPermission(permissions, 'parents.all') ? LoadableParentList : undefined}
      options={{label: translate('catalogs.parents.title.singular')}}
      recordRepresentation='title'
    />,
    <Resource
      key='periodTypes'
      name='periodTypes'
      show={hasPermission(permissions, 'periodTypes.get') ? LoadablePeriodTypeShow : undefined}
      edit={hasPermission(permissions, 'periodTypes.update') ? LoadablePeriodTypeEdit : undefined}
      create={hasPermission(permissions, 'periodTypes.create') ? LoadablePeriodTypeCreate : undefined}
      list={hasPermission(permissions, 'periodTypes.all') ? LoadablePeriodTypeList : undefined}
      options={{label: translate('catalogs.periodTypes.title.singular')}}
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
      key='playerAggregatedRoles'
      name='playerAggregatedRoles'
      show={hasPermission(permissions, 'playerAggregatedRoles.get') ? LoadablePlayerAggregatedRoleShow : undefined}
      edit={hasPermission(permissions, 'playerAggregatedRoles.update') ? LoadablePlayerAggregatedRoleEdit : undefined}
      create={hasPermission(permissions, 'playerAggregatedRoles.create') ? LoadablePlayerAggregatedRoleCreate : undefined}
      list={hasPermission(permissions, 'playerAggregatedRoles.all') ? LoadablePlayerAggregatedRoleList : undefined}
      options={{label: translate('catalogs.playerAggregatedRoles.title.singular')}}
      recordRepresentation='title'
    />,
    <Resource
      key='playerCompetitionRatings'
      name='playerCompetitionRatings'
      show={hasPermission(permissions, 'playerCompetitionRatings.get') ? LoadablePlayerCompetitionRatingShow : undefined}
      edit={hasPermission(permissions, 'playerCompetitionRatings.update') ? LoadablePlayerCompetitionRatingEdit : undefined}
      create={hasPermission(permissions, 'playerCompetitionRatings.create') ? LoadablePlayerCompetitionRatingCreate : undefined}
      list={hasPermission(permissions, 'playerCompetitionRatings.all') ? LoadablePlayerCompetitionRatingList : undefined}
      options={{label: translate('catalogs.playerCompetitionRatings.title.singular')}}
      recordRepresentation='id'
    />,
    <Resource
      key='playerForCompetitionTeams'
      name='playerForCompetitionTeams'
      show={hasPermission(permissions, 'playerForCompetitionTeams.get') ? LoadablePlayerForCompetitionTeamShow : undefined}
      edit={hasPermission(permissions, 'playerForCompetitionTeams.update') ? LoadablePlayerForCompetitionTeamEdit : undefined}
      create={hasPermission(permissions, 'playerForCompetitionTeams.create') ? LoadablePlayerForCompetitionTeamCreate : undefined}
      list={hasPermission(permissions, 'playerForCompetitionTeams.all') ? LoadablePlayerForCompetitionTeamList : undefined}
      options={{label: translate('catalogs.playerForCompetitionTeams.title.singular')}}
      recordRepresentation='id'
    />,
    <Resource
      key='playerForMatchRequests'
      name='playerForMatchRequests'
      show={hasPermission(permissions, 'playerForMatchRequests.get') ? LoadablePlayerForMatchRequestShow : undefined}
      edit={hasPermission(permissions, 'playerForMatchRequests.update') ? LoadablePlayerForMatchRequestEdit : undefined}
      create={hasPermission(permissions, 'playerForMatchRequests.create') ? LoadablePlayerForMatchRequestCreate : undefined}
      list={hasPermission(permissions, 'playerForMatchRequests.all') ? LoadablePlayerForMatchRequestList : undefined}
      options={{label: translate('catalogs.playerForMatchRequests.title.singular')}}
      recordRepresentation='id'
    />,
    <Resource
      key='playerForTeamMatchLists'
      name='playerForTeamMatchLists'
      show={hasPermission(permissions, 'playerForTeamMatchLists.get') ? LoadablePlayerForTeamMatchListShow : undefined}
      edit={hasPermission(permissions, 'playerForTeamMatchLists.update') ? LoadablePlayerForTeamMatchListEdit : undefined}
      create={hasPermission(permissions, 'playerForTeamMatchLists.create') ? LoadablePlayerForTeamMatchListCreate : undefined}
      list={hasPermission(permissions, 'playerForTeamMatchLists.all') ? LoadablePlayerForTeamMatchListList : undefined}
      options={{label: translate('catalogs.playerForTeamMatchLists.title.singular')}}
      recordRepresentation='id'
    />,
    <Resource
      key='playerMatchRatings'
      name='playerMatchRatings'
      show={hasPermission(permissions, 'playerMatchRatings.get') ? LoadablePlayerMatchRatingShow : undefined}
      edit={hasPermission(permissions, 'playerMatchRatings.update') ? LoadablePlayerMatchRatingEdit : undefined}
      create={hasPermission(permissions, 'playerMatchRatings.create') ? LoadablePlayerMatchRatingCreate : undefined}
      list={hasPermission(permissions, 'playerMatchRatings.all') ? LoadablePlayerMatchRatingList : undefined}
      options={{label: translate('catalogs.playerMatchRatings.title.singular')}}
      recordRepresentation='id'
    />,
    <Resource
      key='playerRanks'
      name='playerRanks'
      show={hasPermission(permissions, 'playerRanks.get') ? LoadablePlayerRankShow : undefined}
      edit={hasPermission(permissions, 'playerRanks.update') ? LoadablePlayerRankEdit : undefined}
      create={hasPermission(permissions, 'playerRanks.create') ? LoadablePlayerRankCreate : undefined}
      list={hasPermission(permissions, 'playerRanks.all') ? LoadablePlayerRankList : undefined}
      options={{label: translate('catalogs.playerRanks.title.singular')}}
      recordRepresentation='id'
    />,
    <Resource
      key='playerRoles'
      name='playerRoles'
      show={hasPermission(permissions, 'playerRoles.get') ? LoadablePlayerRoleShow : undefined}
      edit={hasPermission(permissions, 'playerRoles.update') ? LoadablePlayerRoleEdit : undefined}
      create={hasPermission(permissions, 'playerRoles.create') ? LoadablePlayerRoleCreate : undefined}
      list={hasPermission(permissions, 'playerRoles.all') ? LoadablePlayerRoleList : undefined}
      options={{label: translate('catalogs.playerRoles.title.singular')}}
      recordRepresentation='title'
    />,
    <Resource
      key='players'
      name='players'
      show={hasPermission(permissions, 'players.get') ? LoadablePlayerShow : undefined}
      edit={hasPermission(permissions, 'players.update') ? LoadablePlayerEdit : undefined}
      create={hasPermission(permissions, 'players.create') ? LoadablePlayerCreate : undefined}
      list={hasPermission(permissions, 'players.all') ? LoadablePlayerList : undefined}
      options={{label: translate('catalogs.players.title.singular')}}
      recordRepresentation='title'
    />,
    <Resource
      key='reportForClubs'
      name='reportForClubs'
      show={hasPermission(permissions, 'reportForClubs.get') ? LoadableReportForClubShow : undefined}
      edit={hasPermission(permissions, 'reportForClubs.update') ? LoadableReportForClubEdit : undefined}
      create={hasPermission(permissions, 'reportForClubs.create') ? LoadableReportForClubCreate : undefined}
      list={hasPermission(permissions, 'reportForClubs.all') ? LoadableReportForClubList : undefined}
      options={{label: translate('catalogs.reportForClubs.title.singular')}}
      recordRepresentation='title'
    />,
    <Resource
      key='reportForOrganizations'
      name='reportForOrganizations'
      show={hasPermission(permissions, 'reportForOrganizations.get') ? LoadableReportForOrganizationShow : undefined}
      edit={hasPermission(permissions, 'reportForOrganizations.update') ? LoadableReportForOrganizationEdit : undefined}
      create={hasPermission(permissions, 'reportForOrganizations.create') ? LoadableReportForOrganizationCreate : undefined}
      list={hasPermission(permissions, 'reportForOrganizations.all') ? LoadableReportForOrganizationList : undefined}
      options={{label: translate('catalogs.reportForOrganizations.title.singular')}}
      recordRepresentation='title'
    />,
    <Resource
      key='reportForParents'
      name='reportForParents'
      show={hasPermission(permissions, 'reportForParents.get') ? LoadableReportForParentShow : undefined}
      edit={hasPermission(permissions, 'reportForParents.update') ? LoadableReportForParentEdit : undefined}
      create={hasPermission(permissions, 'reportForParents.create') ? LoadableReportForParentCreate : undefined}
      list={hasPermission(permissions, 'reportForParents.all') ? LoadableReportForParentList : undefined}
      options={{label: translate('catalogs.reportForParents.title.singular')}}
      recordRepresentation='id'
    />,
    <Resource
      key='reportForTeams'
      name='reportForTeams'
      show={hasPermission(permissions, 'reportForTeams.get') ? LoadableReportForTeamShow : undefined}
      edit={hasPermission(permissions, 'reportForTeams.update') ? LoadableReportForTeamEdit : undefined}
      create={hasPermission(permissions, 'reportForTeams.create') ? LoadableReportForTeamCreate : undefined}
      list={hasPermission(permissions, 'reportForTeams.all') ? LoadableReportForTeamList : undefined}
      options={{label: translate('catalogs.reportForTeams.title.singular')}}
      recordRepresentation='id'
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
      key='teamForCompetitions'
      name='teamForCompetitions'
      show={hasPermission(permissions, 'teamForCompetitions.get') ? LoadableTeamForCompetitionShow : undefined}
      edit={hasPermission(permissions, 'teamForCompetitions.update') ? LoadableTeamForCompetitionEdit : undefined}
      create={hasPermission(permissions, 'teamForCompetitions.create') ? LoadableTeamForCompetitionCreate : undefined}
      list={hasPermission(permissions, 'teamForCompetitions.all') ? LoadableTeamForCompetitionList : undefined}
      options={{label: translate('catalogs.teamForCompetitions.title.singular')}}
      recordRepresentation='fullTitle'
    />,
    <Resource
      key='teamForPlayers'
      name='teamForPlayers'
      show={hasPermission(permissions, 'teamForPlayers.get') ? LoadableTeamForPlayerShow : undefined}
      edit={hasPermission(permissions, 'teamForPlayers.update') ? LoadableTeamForPlayerEdit : undefined}
      create={hasPermission(permissions, 'teamForPlayers.create') ? LoadableTeamForPlayerCreate : undefined}
      list={hasPermission(permissions, 'teamForPlayers.all') ? LoadableTeamForPlayerList : undefined}
      options={{label: translate('catalogs.teamForPlayers.title.singular')}}
      recordRepresentation='id'
    />,
    <Resource
      key='teamMatchLists'
      name='teamMatchLists'
      show={hasPermission(permissions, 'teamMatchLists.get') ? LoadableTeamMatchListShow : undefined}
      edit={hasPermission(permissions, 'teamMatchLists.update') ? LoadableTeamMatchListEdit : undefined}
      create={hasPermission(permissions, 'teamMatchLists.create') ? LoadableTeamMatchListCreate : undefined}
      list={hasPermission(permissions, 'teamMatchLists.all') ? LoadableTeamMatchListList : undefined}
      options={{label: translate('catalogs.teamMatchLists.title.singular')}}
      recordRepresentation='id'
    />,
    <Resource
      key='teamMatchReports'
      name='teamMatchReports'
      show={hasPermission(permissions, 'teamMatchReports.get') ? LoadableTeamMatchReportShow : undefined}
      edit={hasPermission(permissions, 'teamMatchReports.update') ? LoadableTeamMatchReportEdit : undefined}
      create={hasPermission(permissions, 'teamMatchReports.create') ? LoadableTeamMatchReportCreate : undefined}
      list={hasPermission(permissions, 'teamMatchReports.all') ? LoadableTeamMatchReportList : undefined}
      options={{label: translate('catalogs.teamMatchReports.title.singular')}}
      recordRepresentation='id'
    />,
    <Resource
      key='teams'
      name='teams'
      show={hasPermission(permissions, 'teams.get') ? LoadableTeamShow : undefined}
      edit={hasPermission(permissions, 'teams.update') ? LoadableTeamEdit : undefined}
      create={hasPermission(permissions, 'teams.create') ? LoadableTeamCreate : undefined}
      list={hasPermission(permissions, 'teams.all') ? LoadableTeamList : undefined}
      options={{label: translate('catalogs.teams.title.singular')}}
      recordRepresentation='title'
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
    <Resource
      key='wscContacts'
      name='wscContacts'
      show={hasPermission(permissions, 'wscContacts.get') ? LoadableWscContactShow : undefined}
      edit={hasPermission(permissions, 'wscContacts.update') ? LoadableWscContactEdit : undefined}
      create={hasPermission(permissions, 'wscContacts.create') ? LoadableWscContactCreate : undefined}
      list={hasPermission(permissions, 'wscContacts.all') ? LoadableWscContactList : undefined}
      options={{label: translate('catalogs.wscContacts.title.singular')}}
      recordRepresentation='name'
    />,
    <Resource
      key='wscMessages'
      name='wscMessages'
      show={hasPermission(permissions, 'wscMessages.get') ? LoadableWscMessageShow : undefined}
      edit={hasPermission(permissions, 'wscMessages.update') ? LoadableWscMessageEdit : undefined}
      create={hasPermission(permissions, 'wscMessages.create') ? LoadableWscMessageCreate : undefined}
      list={hasPermission(permissions, 'wscMessages.all') ? LoadableWscMessageList : undefined}
      options={{label: translate('catalogs.wscMessages.title.singular')}}
      recordRepresentation='id'
    />,
    <Resource
      key='wscUsers'
      name='wscUsers'
      show={hasPermission(permissions, 'wscUsers.get') ? LoadableWscUserShow : undefined}
      edit={hasPermission(permissions, 'wscUsers.update') ? LoadableWscUserEdit : undefined}
      create={hasPermission(permissions, 'wscUsers.create') ? LoadableWscUserCreate : undefined}
      list={hasPermission(permissions, 'wscUsers.all') ? LoadableWscUserList : undefined}
      options={{label: translate('catalogs.wscUsers.title.singular')}}
      recordRepresentation='login'
    />,
  ];
}
