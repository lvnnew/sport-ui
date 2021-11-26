/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  NumberField,
} from 'react-admin';
import StatFilter from './StatFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultStatList: FC<ListProps> = (props: ListProps) => (
  <List title='Stats' exporter={false} filters={<StatFilter />} {...props}>
    <Datagrid rowClick='show'>
      <TextField source='id' />
      <DateField source='updated' />
      <NumberField source='helloCount' />
    </Datagrid>
  </List>
);

export default DefaultStatList;
