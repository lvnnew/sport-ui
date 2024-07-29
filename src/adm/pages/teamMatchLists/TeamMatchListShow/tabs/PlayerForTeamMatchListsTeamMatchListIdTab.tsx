/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  NumberField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const PlayerForTeamMatchListsTeamMatchListIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='playerForTeamMatchLists'
      target='teamMatchListId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.playerForTeamMatchLists.fields.id' />
        <ReferenceField source='teamMatchListId' label='catalogs.playerForTeamMatchLists.fields.teamMatchListId' reference='teamMatchLists' link='show' />
        <ReferenceField source='playerId' label='catalogs.playerForTeamMatchLists.fields.playerId' reference='players' link='show' />
        <BooleanField source='startingPosition' label='catalogs.playerForTeamMatchLists.fields.startingPosition' />
        <BooleanField source='onField' label='catalogs.playerForTeamMatchLists.fields.onField' />
        <ReferenceField source='playerRoleId' label='catalogs.playerForTeamMatchLists.fields.playerRoleId' reference='playerRoles' link='show' />
        <NumberField source='playerOnMatchNumber' label='catalogs.playerForTeamMatchLists.fields.playerOnMatchNumber' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default PlayerForTeamMatchListsTeamMatchListIdTab;
