/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from 'react-admin';
import RoleFilter from './RoleFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultRoleList: FC<ListProps> = (props: ListProps) => (
  <List title='Roles' exporter={false} filters={<RoleFilter />} {...props}>
    <Datagrid rowClick='show'>
      <TextField source='id' />
      <TextField source='title' />
      <BooleanField source='hasFullAccess' />
    </Datagrid>
  </List>
);

export default DefaultRoleList;
