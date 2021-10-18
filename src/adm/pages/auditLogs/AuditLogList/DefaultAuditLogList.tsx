/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
} from 'react-admin';
import AuditLogFilter from './AuditLogFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAuditLogList: FC<ListProps> = (props: ListProps) => (
  <List title={'Audit logs'} exporter={false} filters={<AuditLogFilter />} {...props}>
    <Datagrid rowClick='show'>
      <NumberField source='id' />
      <DateField source='date' />
      <TextField source='title' />
      <TextField source='entityType' />
      <TextField source='entityId' />
      <TextField source='action' />
      <ReferenceField source='managerId' reference='managers' link='show'>
        <TextField source='title' />
      </ReferenceField>
      <ReferenceField source='userId' reference='users' link='show'>
        <TextField source='title' />
      </ReferenceField>
      <BooleanField source='foreign' />
      <TextField source='foreignEntityType' />
      <TextField source='foreignEntityId' />
      <TextField source='actionData' />
    </Datagrid>
  </List>
);

export default DefaultAuditLogList;
