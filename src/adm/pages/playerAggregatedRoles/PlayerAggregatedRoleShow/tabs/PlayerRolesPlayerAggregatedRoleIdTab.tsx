/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const PlayerRolesPlayerAggregatedRoleIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='playerRoles'
      target='playerAggregatedRoleId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <TextField source='id' label='catalogs.playerRoles.fields.id' />
        <TextField source='title' label='catalogs.playerRoles.fields.title' />
        <TextField source='shortTitle' label='catalogs.playerRoles.fields.shortTitle' />
        <ReferenceField source='playerAggregatedRoleId' label='catalogs.playerRoles.fields.playerAggregatedRoleId' reference='playerAggregatedRoles' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default PlayerRolesPlayerAggregatedRoleIdTab;
