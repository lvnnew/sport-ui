/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  NumberField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
  useTranslate,
} from 'react-admin';
import DateField from '../../../../../uiLib/DateField';

// DO NOT EDIT! THIS IS GENERATED FILE

const AuditLogsUserIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='auditLogs'
      target='userId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.auditLogs.fields.id' />
        <DateField source='date' label='catalogs.auditLogs.fields.date' showTime />
        <TextField source='title' label='catalogs.auditLogs.fields.title' />
        <BooleanField source='success' label='catalogs.auditLogs.fields.success' />
        <TextField source='error' label='catalogs.auditLogs.fields.error' />
        <ReferenceField source='entityTypeId' label='catalogs.auditLogs.fields.entityTypeId' reference='entities' link='show' />
        <TextField source='entityId' label='catalogs.auditLogs.fields.entityId' />
        <ReferenceField source='actionTypeId' label='catalogs.auditLogs.fields.actionTypeId' reference='auditLogActionTypes' link='show' />
        <ReferenceField source='managerId' label='catalogs.auditLogs.fields.managerId' reference='managers' link='show' />
        <ReferenceField source='userId' label='catalogs.auditLogs.fields.userId' reference='users' link='show' />
        <BooleanField source='foreign' label='catalogs.auditLogs.fields.foreign' />
        <TextField source='foreignEntityType' label='catalogs.auditLogs.fields.foreignEntityType' />
        <TextField source='foreignEntityId' label='catalogs.auditLogs.fields.foreignEntityId' />
        <TextField source='actionData' label='catalogs.auditLogs.fields.actionData' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default AuditLogsUserIdTab;
