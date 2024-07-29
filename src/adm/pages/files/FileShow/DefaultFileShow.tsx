/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import ManagersPhotoIdTab from './tabs/ManagersPhotoIdTab';
import PlayerRanksFileIdTab from './tabs/PlayerRanksFileIdTab';
import PlayersPhotoIdTab from './tabs/PlayersPhotoIdTab';
import ReportForTeamsFileIdTab from './tabs/ReportForTeamsFileIdTab';
import ReportForTeamsHtmlFileIdTab from './tabs/ReportForTeamsHtmlFileIdTab';
import ReportForTeamsJsonFileIdTab from './tabs/ReportForTeamsJsonFileIdTab';
import TeamMatchReportsFileIdTab from './tabs/TeamMatchReportsFileIdTab';
import TeamsFileIdTab from './tabs/TeamsFileIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';
import CatalogTitle from '../../../../raUiLib/CatalogTitle';
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultFileShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<Breadcrumbs><DefaultActions /></Breadcrumbs>} title={<CatalogTitle />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <ManagersPhotoIdTab label={translate('catalogs.managers.title.plural')} path='managers-photoId' />
        <PlayerRanksFileIdTab label={translate('catalogs.playerRanks.title.plural')} path='playerRanks-fileId' />
        <PlayersPhotoIdTab label={translate('catalogs.players.title.plural')} path='players-photoId' />
        <ReportForTeamsFileIdTab label={translate('catalogs.reportForTeams.title.plural')} path='reportForTeams-fileId' />
        <ReportForTeamsHtmlFileIdTab label={translate('catalogs.reportForTeams.title.plural')} path='reportForTeams-htmlFileId' />
        <ReportForTeamsJsonFileIdTab label={translate('catalogs.reportForTeams.title.plural')} path='reportForTeams-jsonFileId' />
        <TeamMatchReportsFileIdTab label={translate('catalogs.teamMatchReports.title.plural')} path='teamMatchReports-fileId' />
        <TeamsFileIdTab label={translate('catalogs.teams.title.plural')} path='teams-fileId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultFileShow;
