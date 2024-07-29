/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import EventsMainPlayerIdTab from './tabs/EventsMainPlayerIdTab';
import EventsSecondPlayerIdTab from './tabs/EventsSecondPlayerIdTab';
import HistoryOfPlayerRolesPlayerIdTab from './tabs/HistoryOfPlayerRolesPlayerIdTab';
import PlayerCompetitionRatingsPlayerIdTab from './tabs/PlayerCompetitionRatingsPlayerIdTab';
import PlayerForCompetitionTeamsPlayerIdTab from './tabs/PlayerForCompetitionTeamsPlayerIdTab';
import PlayerForMatchRequestsPlayerIdTab from './tabs/PlayerForMatchRequestsPlayerIdTab';
import PlayerForTeamMatchListsPlayerIdTab from './tabs/PlayerForTeamMatchListsPlayerIdTab';
import PlayerMatchRatingsPlayerIdTab from './tabs/PlayerMatchRatingsPlayerIdTab';
import ReportForParentsPlayerIdTab from './tabs/ReportForParentsPlayerIdTab';
import TeamForPlayersPlayerIdTab from './tabs/TeamForPlayersPlayerIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';
import CatalogTitle from '../../../../raUiLib/CatalogTitle';
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultPlayerShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<Breadcrumbs><DefaultActions /></Breadcrumbs>} title={<CatalogTitle />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <EventsMainPlayerIdTab label={translate('documents.events.title.plural')} path='events-mainPlayerId' />
        <EventsSecondPlayerIdTab label={translate('documents.events.title.plural')} path='events-secondPlayerId' />
        <HistoryOfPlayerRolesPlayerIdTab label={translate('catalogs.historyOfPlayerRoles.title.plural')} path='historyOfPlayerRoles-playerId' />
        <PlayerCompetitionRatingsPlayerIdTab label={translate('catalogs.playerCompetitionRatings.title.plural')} path='playerCompetitionRatings-playerId' />
        <PlayerForCompetitionTeamsPlayerIdTab label={translate('catalogs.playerForCompetitionTeams.title.plural')} path='playerForCompetitionTeams-playerId' />
        <PlayerForMatchRequestsPlayerIdTab label={translate('catalogs.playerForMatchRequests.title.plural')} path='playerForMatchRequests-playerId' />
        <PlayerForTeamMatchListsPlayerIdTab label={translate('catalogs.playerForTeamMatchLists.title.plural')} path='playerForTeamMatchLists-playerId' />
        <PlayerMatchRatingsPlayerIdTab label={translate('catalogs.playerMatchRatings.title.plural')} path='playerMatchRatings-playerId' />
        <ReportForParentsPlayerIdTab label={translate('catalogs.reportForParents.title.plural')} path='reportForParents-playerId' />
        <TeamForPlayersPlayerIdTab label={translate('catalogs.teamForPlayers.title.plural')} path='teamForPlayers-playerId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultPlayerShow;
