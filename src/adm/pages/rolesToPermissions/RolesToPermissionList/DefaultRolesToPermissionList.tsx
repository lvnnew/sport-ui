/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  ReferenceField,
} from 'react-admin';
import RolesToPermissionFilter from './RolesToPermissionFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultRolesToPermissionList: FC<ListProps> = (props: ListProps) => (
  <List title={'Roles to permissions'} exporter={false} filters={<RolesToPermissionFilter />} {...props}>
    <Datagrid rowClick='show'>
      <NumberField source='id' />
      <ReferenceField source='roleId' reference='roles' link='show'>
        <TextField source='title' />
      </ReferenceField>
      <ReferenceField source='permissionId' reference='permissions' link='show'>
        <TextField source='title' />
      </ReferenceField>
    </Datagrid>
  </List>
);

export default DefaultRolesToPermissionList;
