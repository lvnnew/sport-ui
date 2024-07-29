/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  TextField,
  NumberField,
  ReferenceField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const PlayerRanksFileIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='playerRanks'
      target='fileId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <TextField source='id' label='catalogs.playerRanks.fields.id' />
        <TextField source='title' label='catalogs.playerRanks.fields.title' />
        <NumberField source='rating' label='catalogs.playerRanks.fields.rating' />
        <ReferenceField source='fileId' label='catalogs.playerRanks.fields.fileId' reference='files' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default PlayerRanksFileIdTab;
