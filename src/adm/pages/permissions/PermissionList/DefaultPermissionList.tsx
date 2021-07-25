/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  TextField
} from 'react-admin';
import PermissionFilter from './PermissionFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultPermissionList: FC<ListProps> = (props: ListProps) => (
  <List title={'Permissions'} exporter={false} filters={<PermissionFilter />} {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="title" />
    </Datagrid>
  </List>
);

export default DefaultPermissionList;
