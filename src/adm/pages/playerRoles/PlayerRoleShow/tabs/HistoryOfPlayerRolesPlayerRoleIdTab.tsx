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

const HistoryOfPlayerRolesPlayerRoleIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='historyOfPlayerRoles'
      target='playerRoleId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.historyOfPlayerRoles.fields.id' />
        <ReferenceField source='matchId' label='catalogs.historyOfPlayerRoles.fields.matchId' reference='matches' link='show' />
        <ReferenceField source='playerId' label='catalogs.historyOfPlayerRoles.fields.playerId' reference='players' link='show' />
        <ReferenceField source='playerRoleId' label='catalogs.historyOfPlayerRoles.fields.playerRoleId' reference='playerRoles' link='show' />
        <BooleanField source='status' label='catalogs.historyOfPlayerRoles.fields.status' />
        <NumberField source='order' label='catalogs.historyOfPlayerRoles.fields.order' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default HistoryOfPlayerRolesPlayerRoleIdTab;
