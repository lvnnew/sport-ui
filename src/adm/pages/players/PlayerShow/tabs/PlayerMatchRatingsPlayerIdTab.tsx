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

const PlayerMatchRatingsPlayerIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='playerMatchRatings'
      target='playerId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.playerMatchRatings.fields.id' />
        <ReferenceField source='matchId' label='catalogs.playerMatchRatings.fields.matchId' reference='matches' link='show' />
        <ReferenceField source='playerId' label='catalogs.playerMatchRatings.fields.playerId' reference='players' link='show' />
        <NumberField source='rating' label='catalogs.playerMatchRatings.fields.rating' />
        <NumberField source='progressivePassAccuracy' label='catalogs.playerMatchRatings.fields.progressivePassAccuracy' />
        <NumberField source='playerRatingAverage' label='catalogs.playerMatchRatings.fields.playerRatingAverage' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default PlayerMatchRatingsPlayerIdTab;
