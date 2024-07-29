/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import EventsTeamForCompetitionIdTab from './tabs/EventsTeamForCompetitionIdTab';
import MatchRequestsTeamForCompetitionIdTab from './tabs/MatchRequestsTeamForCompetitionIdTab';
import MatchesFirstTeamIdTab from './tabs/MatchesFirstTeamIdTab';
import MatchesFirstTeamOnFieldIdTab from './tabs/MatchesFirstTeamOnFieldIdTab';
import MatchesSecondTeamIdTab from './tabs/MatchesSecondTeamIdTab';
import PlayerForCompetitionTeamsTeamForCompetitionIdTab from './tabs/PlayerForCompetitionTeamsTeamForCompetitionIdTab';
import ReportForTeamsTeamForCompetitionIdTab from './tabs/ReportForTeamsTeamForCompetitionIdTab';
import TeamMatchListsTeamForCompetitionIdTab from './tabs/TeamMatchListsTeamForCompetitionIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';
import CatalogTitle from '../../../../raUiLib/CatalogTitle';
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultTeamForCompetitionShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<Breadcrumbs><DefaultActions /></Breadcrumbs>} title={<CatalogTitle />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <EventsTeamForCompetitionIdTab label={translate('documents.events.title.plural')} path='events-teamForCompetitionId' />
        <MatchRequestsTeamForCompetitionIdTab label={translate('catalogs.matchRequests.title.plural')} path='matchRequests-teamForCompetitionId' />
        <MatchesFirstTeamIdTab label={translate('catalogs.matches.title.plural')} path='matches-firstTeamId' />
        <MatchesFirstTeamOnFieldIdTab label={translate('catalogs.matches.title.plural')} path='matches-firstTeamOnFieldId' />
        <MatchesSecondTeamIdTab label={translate('catalogs.matches.title.plural')} path='matches-secondTeamId' />
        <PlayerForCompetitionTeamsTeamForCompetitionIdTab label={translate('catalogs.playerForCompetitionTeams.title.plural')} path='playerForCompetitionTeams-teamForCompetitionId' />
        <ReportForTeamsTeamForCompetitionIdTab label={translate('catalogs.reportForTeams.title.plural')} path='reportForTeams-teamForCompetitionId' />
        <TeamMatchListsTeamForCompetitionIdTab label={translate('catalogs.teamMatchLists.title.plural')} path='teamMatchLists-teamForCompetitionId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultTeamForCompetitionShow;
