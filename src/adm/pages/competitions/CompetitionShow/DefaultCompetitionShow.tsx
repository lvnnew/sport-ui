/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import MatchesCompetitionIdTab from './tabs/MatchesCompetitionIdTab';
import PlayerCompetitionRatingsCompetitionIdTab from './tabs/PlayerCompetitionRatingsCompetitionIdTab';
import ReportForClubsCompetitionIdTab from './tabs/ReportForClubsCompetitionIdTab';
import ReportForOrganizationsCompetitionIdTab from './tabs/ReportForOrganizationsCompetitionIdTab';
import TeamForCompetitionsCompetitionIdTab from './tabs/TeamForCompetitionsCompetitionIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';
import CatalogTitle from '../../../../raUiLib/CatalogTitle';
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultCompetitionShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<Breadcrumbs><DefaultActions /></Breadcrumbs>} title={<CatalogTitle />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <MatchesCompetitionIdTab label={translate('catalogs.matches.title.plural')} path='matches-competitionId' />
        <PlayerCompetitionRatingsCompetitionIdTab label={translate('catalogs.playerCompetitionRatings.title.plural')} path='playerCompetitionRatings-competitionId' />
        <ReportForClubsCompetitionIdTab label={translate('catalogs.reportForClubs.title.plural')} path='reportForClubs-competitionId' />
        <ReportForOrganizationsCompetitionIdTab label={translate('catalogs.reportForOrganizations.title.plural')} path='reportForOrganizations-competitionId' />
        <TeamForCompetitionsCompetitionIdTab label={translate('catalogs.teamForCompetitions.title.plural')} path='teamForCompetitions-competitionId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultCompetitionShow;
