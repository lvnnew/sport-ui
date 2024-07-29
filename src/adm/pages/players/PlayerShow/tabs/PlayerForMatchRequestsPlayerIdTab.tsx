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

const PlayerForMatchRequestsPlayerIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='playerForMatchRequests'
      target='playerId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.playerForMatchRequests.fields.id' />
        <ReferenceField source='matchRequestId' label='catalogs.playerForMatchRequests.fields.matchRequestId' reference='matchRequests' link='show' />
        <ReferenceField source='playerId' label='catalogs.playerForMatchRequests.fields.playerId' reference='players' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default PlayerForMatchRequestsPlayerIdTab;
