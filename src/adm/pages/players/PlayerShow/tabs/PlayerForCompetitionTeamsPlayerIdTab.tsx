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

const PlayerForCompetitionTeamsPlayerIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='playerForCompetitionTeams'
      target='playerId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.playerForCompetitionTeams.fields.id' />
        <ReferenceField source='teamForCompetitionId' label='catalogs.playerForCompetitionTeams.fields.teamForCompetitionId' reference='teamForCompetitions' link='show' />
        <ReferenceField source='playerId' label='catalogs.playerForCompetitionTeams.fields.playerId' reference='players' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default PlayerForCompetitionTeamsPlayerIdTab;
