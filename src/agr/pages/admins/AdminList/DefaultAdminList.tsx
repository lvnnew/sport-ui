/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField
} from 'react-admin';
import AdminFilter from './AdminFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAdminList: FC<ListProps> = (props: ListProps) => (
  <List title={'Admins'} exporter={false} filters={<AdminFilter />} {...props}>
    <Datagrid rowClick="show">
      <NumberField source="id" />
      <TextField source="lastname" />
      <TextField source="firstname" />
      <TextField source="email" />
    </Datagrid>
  </List>
);

export default DefaultAdminList;
