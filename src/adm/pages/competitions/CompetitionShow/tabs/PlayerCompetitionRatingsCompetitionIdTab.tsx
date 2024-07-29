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

const PlayerCompetitionRatingsCompetitionIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='playerCompetitionRatings'
      target='competitionId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.playerCompetitionRatings.fields.id' />
        <ReferenceField source='competitionId' label='catalogs.playerCompetitionRatings.fields.competitionId' reference='competitions' link='show' />
        <ReferenceField source='playerId' label='catalogs.playerCompetitionRatings.fields.playerId' reference='players' link='show' />
        <NumberField source='rating' label='catalogs.playerCompetitionRatings.fields.rating' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default PlayerCompetitionRatingsCompetitionIdTab;
