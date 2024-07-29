/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import ReportForClubsClubIdTab from './tabs/ReportForClubsClubIdTab';
import ReportForTeamsClubIdTab from './tabs/ReportForTeamsClubIdTab';
import TeamsClubIdTab from './tabs/TeamsClubIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';
import CatalogTitle from '../../../../raUiLib/CatalogTitle';
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultClubShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<Breadcrumbs><DefaultActions /></Breadcrumbs>} title={<CatalogTitle />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <ReportForClubsClubIdTab label={translate('catalogs.reportForClubs.title.plural')} path='reportForClubs-clubId' />
        <ReportForTeamsClubIdTab label={translate('catalogs.reportForTeams.title.plural')} path='reportForTeams-clubId' />
        <TeamsClubIdTab label={translate('catalogs.teams.title.plural')} path='teams-clubId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultClubShow;
