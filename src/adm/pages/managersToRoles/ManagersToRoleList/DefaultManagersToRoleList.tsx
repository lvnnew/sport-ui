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
import ManagersToRoleFilter from './ManagersToRoleFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagersToRoleList: FC<ListProps> = (props: ListProps) => (
  <List title={'Managers to roles'} exporter={false} filters={<ManagersToRoleFilter />} {...props}>
    <Datagrid rowClick='show'>
      <NumberField source='id' />
      <TextField source='title' />
      <ReferenceField source='managerId' reference='managers' link='show'>
        <TextField source='title' />
      </ReferenceField>
      <ReferenceField source='roleId' reference='roles' link='show'>
        <TextField source='title' />
      </ReferenceField>
    </Datagrid>
  </List>
);

export default DefaultManagersToRoleList;
