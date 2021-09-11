/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
} from 'react-admin';
import UserFilter from './UserFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultUserList: FC<ListProps> = (props: ListProps) => (
  <List title={'Users'} exporter={false} filters={<UserFilter />} {...props}>
    <Datagrid rowClick='show'>
      <NumberField source='id' />
      <TextField source='lastname' />
      <TextField source='firstname' />
      <TextField source='email' />
    </Datagrid>
  </List>
);

export default DefaultUserList;
