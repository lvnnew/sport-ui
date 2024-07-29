/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import PlayerRolesPlayerAggregatedRoleIdTab from './tabs/PlayerRolesPlayerAggregatedRoleIdTab';
import PlayersPlayerAggregatedRoleIdTab from './tabs/PlayersPlayerAggregatedRoleIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';
import CatalogTitle from '../../../../raUiLib/CatalogTitle';
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultPlayerAggregatedRoleShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<Breadcrumbs><DefaultActions /></Breadcrumbs>} title={<CatalogTitle />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <PlayerRolesPlayerAggregatedRoleIdTab label={translate('catalogs.playerRoles.title.plural')} path='playerRoles-playerAggregatedRoleId' />
        <PlayersPlayerAggregatedRoleIdTab label={translate('catalogs.players.title.plural')} path='players-playerAggregatedRoleId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultPlayerAggregatedRoleShow;
