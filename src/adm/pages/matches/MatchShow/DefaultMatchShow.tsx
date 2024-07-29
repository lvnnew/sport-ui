/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import EventsMatchIdTab from './tabs/EventsMatchIdTab';
import HistoryOfPlayerRolesMatchIdTab from './tabs/HistoryOfPlayerRolesMatchIdTab';
import MatchRequestsMatchIdTab from './tabs/MatchRequestsMatchIdTab';
import MatchVideosMatchIdTab from './tabs/MatchVideosMatchIdTab';
import PlayerMatchRatingsMatchIdTab from './tabs/PlayerMatchRatingsMatchIdTab';
import ReportForParentsMatchIdTab from './tabs/ReportForParentsMatchIdTab';
import ReportForTeamsMatchIdTab from './tabs/ReportForTeamsMatchIdTab';
import TeamMatchListsMatchIdTab from './tabs/TeamMatchListsMatchIdTab';
import TeamMatchReportsMatchIdTab from './tabs/TeamMatchReportsMatchIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';
import CatalogTitle from '../../../../raUiLib/CatalogTitle';
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMatchShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<Breadcrumbs><DefaultActions /></Breadcrumbs>} title={<CatalogTitle />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <EventsMatchIdTab label={translate('documents.events.title.plural')} path='events-matchId' />
        <HistoryOfPlayerRolesMatchIdTab label={translate('catalogs.historyOfPlayerRoles.title.plural')} path='historyOfPlayerRoles-matchId' />
        <MatchRequestsMatchIdTab label={translate('catalogs.matchRequests.title.plural')} path='matchRequests-matchId' />
        <MatchVideosMatchIdTab label={translate('catalogs.matchVideos.title.plural')} path='matchVideos-matchId' />
        <PlayerMatchRatingsMatchIdTab label={translate('catalogs.playerMatchRatings.title.plural')} path='playerMatchRatings-matchId' />
        <ReportForParentsMatchIdTab label={translate('catalogs.reportForParents.title.plural')} path='reportForParents-matchId' />
        <ReportForTeamsMatchIdTab label={translate('catalogs.reportForTeams.title.plural')} path='reportForTeams-matchId' />
        <TeamMatchListsMatchIdTab label={translate('catalogs.teamMatchLists.title.plural')} path='teamMatchLists-matchId' />
        <TeamMatchReportsMatchIdTab label={translate('catalogs.teamMatchReports.title.plural')} path='teamMatchReports-matchId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultMatchShow;
