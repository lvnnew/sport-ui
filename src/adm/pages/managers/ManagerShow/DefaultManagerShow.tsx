/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import AdmRefreshTokensManagerIdTab from './tabs/AdmRefreshTokensManagerIdTab';
import AuditLogsManagerIdTab from './tabs/AuditLogsManagerIdTab';
import ClubsCreatedByManagerIdTab from './tabs/ClubsCreatedByManagerIdTab';
import ClubsLastChangedByManagerIdTab from './tabs/ClubsLastChangedByManagerIdTab';
import CompetitionsCreatedByManagerIdTab from './tabs/CompetitionsCreatedByManagerIdTab';
import CompetitionsLastChangedByManagerIdTab from './tabs/CompetitionsLastChangedByManagerIdTab';
import DelegationsFromIdTab from './tabs/DelegationsFromIdTab';
import DelegationsToIdTab from './tabs/DelegationsToIdTab';
import ManagerLoginsManagerIdTab from './tabs/ManagerLoginsManagerIdTab';
import ManagersToPermissionsManagerIdTab from './tabs/ManagersToPermissionsManagerIdTab';
import ManagersToRolesManagerIdTab from './tabs/ManagersToRolesManagerIdTab';
import MatchesCreatedByManagerIdTab from './tabs/MatchesCreatedByManagerIdTab';
import MatchesLastChangedByManagerIdTab from './tabs/MatchesLastChangedByManagerIdTab';
import OrganizatorsCreatedByManagerIdTab from './tabs/OrganizatorsCreatedByManagerIdTab';
import OrganizatorsLastChangedByManagerIdTab from './tabs/OrganizatorsLastChangedByManagerIdTab';
import ParentsCreatedByManagerIdTab from './tabs/ParentsCreatedByManagerIdTab';
import ParentsLastChangedByManagerIdTab from './tabs/ParentsLastChangedByManagerIdTab';
import PlayersCreatedByManagerIdTab from './tabs/PlayersCreatedByManagerIdTab';
import PlayersLastChangedByManagerIdTab from './tabs/PlayersLastChangedByManagerIdTab';
import TeamsCreatedByManagerIdTab from './tabs/TeamsCreatedByManagerIdTab';
import TeamsLastChangedByManagerIdTab from './tabs/TeamsLastChangedByManagerIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';
import CatalogTitle from '../../../../raUiLib/CatalogTitle';
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagerShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<Breadcrumbs><DefaultActions /></Breadcrumbs>} title={<CatalogTitle />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <AdmRefreshTokensManagerIdTab label={translate('catalogs.admRefreshTokens.title.plural')} path='admRefreshTokens-managerId' />
        <AuditLogsManagerIdTab label={translate('catalogs.auditLogs.title.plural')} path='auditLogs-managerId' />
        <ClubsCreatedByManagerIdTab label={translate('catalogs.clubs.title.plural')} path='clubs-createdByManagerId' />
        <ClubsLastChangedByManagerIdTab label={translate('catalogs.clubs.title.plural')} path='clubs-lastChangedByManagerId' />
        <CompetitionsCreatedByManagerIdTab label={translate('catalogs.competitions.title.plural')} path='competitions-createdByManagerId' />
        <CompetitionsLastChangedByManagerIdTab label={translate('catalogs.competitions.title.plural')} path='competitions-lastChangedByManagerId' />
        <DelegationsFromIdTab label={translate('catalogs.delegations.title.plural')} path='delegations-fromId' />
        <DelegationsToIdTab label={translate('catalogs.delegations.title.plural')} path='delegations-toId' />
        <ManagerLoginsManagerIdTab label={translate('catalogs.managerLogins.title.plural')} path='managerLogins-managerId' />
        <ManagersToPermissionsManagerIdTab label={translate('catalogs.managersToPermissions.title.plural')} path='managersToPermissions-managerId' />
        <ManagersToRolesManagerIdTab label={translate('catalogs.managersToRoles.title.plural')} path='managersToRoles-managerId' />
        <MatchesCreatedByManagerIdTab label={translate('catalogs.matches.title.plural')} path='matches-createdByManagerId' />
        <MatchesLastChangedByManagerIdTab label={translate('catalogs.matches.title.plural')} path='matches-lastChangedByManagerId' />
        <OrganizatorsCreatedByManagerIdTab label={translate('catalogs.organizators.title.plural')} path='organizators-createdByManagerId' />
        <OrganizatorsLastChangedByManagerIdTab label={translate('catalogs.organizators.title.plural')} path='organizators-lastChangedByManagerId' />
        <ParentsCreatedByManagerIdTab label={translate('catalogs.parents.title.plural')} path='parents-createdByManagerId' />
        <ParentsLastChangedByManagerIdTab label={translate('catalogs.parents.title.plural')} path='parents-lastChangedByManagerId' />
        <PlayersCreatedByManagerIdTab label={translate('catalogs.players.title.plural')} path='players-createdByManagerId' />
        <PlayersLastChangedByManagerIdTab label={translate('catalogs.players.title.plural')} path='players-lastChangedByManagerId' />
        <TeamsCreatedByManagerIdTab label={translate('catalogs.teams.title.plural')} path='teams-createdByManagerId' />
        <TeamsLastChangedByManagerIdTab label={translate('catalogs.teams.title.plural')} path='teams-lastChangedByManagerId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultManagerShow;
