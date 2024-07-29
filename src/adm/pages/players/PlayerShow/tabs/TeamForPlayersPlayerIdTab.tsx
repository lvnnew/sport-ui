/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  NumberField,
  ReferenceField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const TeamForPlayersPlayerIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='teamForPlayers'
      target='playerId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.teamForPlayers.fields.id' />
        <ReferenceField source='playerId' label='catalogs.teamForPlayers.fields.playerId' reference='players' link='show' />
        <ReferenceField source='teamId' label='catalogs.teamForPlayers.fields.teamId' reference='teams' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default TeamForPlayersPlayerIdTab;
