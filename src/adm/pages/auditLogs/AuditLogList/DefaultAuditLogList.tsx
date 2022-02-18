/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  ReferenceField,
  BooleanField,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import AuditLogFilter from './AuditLogFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAuditLogList: FC<ListProps> = (props: ListProps) => (
  <List title='Audit logs' exporter={false} filters={<AuditLogFilter />} {...props}>
    <Datagrid rowClick='show'>
      <NumberField source='id' />
      <DateField source='date' showTime />
      <TextField source='title' />
      <ReferenceField source='entityTypeId' reference='entities' link='show'>
        <TextField source='title' />
      </ReferenceField>
      <TextField source='entityId' />
      <ReferenceField source='actionTypeId' reference='auditLogActionTypes' link='show'>
        <TextField source='title' />
      </ReferenceField>
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
