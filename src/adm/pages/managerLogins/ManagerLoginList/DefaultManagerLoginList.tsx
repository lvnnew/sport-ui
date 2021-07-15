/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  BooleanField,
  ReferenceField
} from 'react-admin';
import ManagerLoginFilter from './ManagerLoginFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagerLoginList: FC<ListProps> = (props: ListProps) => (
  <List title={'Manager logins'} exporter={false} filters={<ManagerLoginFilter />} {...props}>
    <Datagrid rowClick="show">
      <NumberField source="id" />
      <TextField source="login" />
      <TextField source="passwordHash" />
      <TextField source="role" />
      <BooleanField source="emailVerified" />
      <BooleanField source="initialPasswordChanged" />
      <BooleanField source="locked" />
      <ReferenceField source="managerId" reference="managers" link="show">
      <TextField source="title" />
    </ReferenceField>
    </Datagrid>
  </List>
);

export default DefaultManagerLoginList;
