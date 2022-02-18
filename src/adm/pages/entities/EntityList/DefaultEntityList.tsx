/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  TextField,
} from 'react-admin';
import EntityFilter from './EntityFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultEntityList: FC<ListProps> = (props: ListProps) => (
  <List title='Entities' exporter={false} filters={<EntityFilter />} {...props}>
    <Datagrid rowClick='show'>
      <TextField source='id' />
      <TextField source='title' />
    </Datagrid>
  </List>
);

export default DefaultEntityList;
