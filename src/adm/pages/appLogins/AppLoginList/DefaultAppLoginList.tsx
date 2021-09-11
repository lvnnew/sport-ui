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
import AppLoginFilter from './AppLoginFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAppLoginList: FC<ListProps> = (props: ListProps) => (
  <List title={'App logins'} exporter={false} filters={<AppLoginFilter />} {...props}>
    <Datagrid rowClick='show'>
      <NumberField source='id' />
      <TextField source='login' />
      <TextField source='passwordHash' />
      <ReferenceField source='userId' reference='users' link='show'>
        <NumberField source='id' />
      </ReferenceField>
    </Datagrid>
  </List>
);

export default DefaultAppLoginList;
