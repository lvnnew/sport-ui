/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import PlayersTeamIdTab from './tabs/PlayersTeamIdTab';
import ReportForClubsTeamIdTab from './tabs/ReportForClubsTeamIdTab';
import TeamForCompetitionsTeamIdTab from './tabs/TeamForCompetitionsTeamIdTab';
import TeamForPlayersTeamIdTab from './tabs/TeamForPlayersTeamIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';
import CatalogTitle from '../../../../raUiLib/CatalogTitle';
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultTeamShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<Breadcrumbs><DefaultActions /></Breadcrumbs>} title={<CatalogTitle />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <PlayersTeamIdTab label={translate('catalogs.players.title.plural')} path='players-teamId' />
        <ReportForClubsTeamIdTab label={translate('catalogs.reportForClubs.title.plural')} path='reportForClubs-teamId' />
        <TeamForCompetitionsTeamIdTab label={translate('catalogs.teamForCompetitions.title.plural')} path='teamForCompetitions-teamId' />
        <TeamForPlayersTeamIdTab label={translate('catalogs.teamForPlayers.title.plural')} path='teamForPlayers-teamId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultTeamShow;
