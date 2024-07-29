/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import EventsFirstPlayerRoleIdTab from './tabs/EventsFirstPlayerRoleIdTab';
import EventsSecondPlayerRoleIdTab from './tabs/EventsSecondPlayerRoleIdTab';
import HistoryOfPlayerRolesPlayerRoleIdTab from './tabs/HistoryOfPlayerRolesPlayerRoleIdTab';
import PlayerForTeamMatchListsPlayerRoleIdTab from './tabs/PlayerForTeamMatchListsPlayerRoleIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';
import CatalogTitle from '../../../../raUiLib/CatalogTitle';
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultPlayerRoleShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<Breadcrumbs><DefaultActions /></Breadcrumbs>} title={<CatalogTitle />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <EventsFirstPlayerRoleIdTab label={translate('documents.events.title.plural')} path='events-firstPlayerRoleId' />
        <EventsSecondPlayerRoleIdTab label={translate('documents.events.title.plural')} path='events-secondPlayerRoleId' />
        <HistoryOfPlayerRolesPlayerRoleIdTab label={translate('catalogs.historyOfPlayerRoles.title.plural')} path='historyOfPlayerRoles-playerRoleId' />
        <PlayerForTeamMatchListsPlayerRoleIdTab label={translate('catalogs.playerForTeamMatchLists.title.plural')} path='playerForTeamMatchLists-playerRoleId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultPlayerRoleShow;
