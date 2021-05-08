/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  BooleanField
} from 'react-admin';
import AdminLoginFilter from './AdminLoginFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAdminLoginList: FC<ListProps> = (props: ListProps) => (
  <List title={'Admin logins'} exporter={false} filters={<AdminLoginFilter />} {...props}>
    <Datagrid rowClick="show">
      <NumberField source="id" />
      <TextField source="login" />
      <TextField source="passwordHash" />
      <TextField source="role" />
      <BooleanField source="emailVerified" />
      <BooleanField source="initialPasswordChanged" />
      <BooleanField source="locked" />
    </Datagrid>
  </List>
);

export default DefaultAdminLoginList;
