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

const AuditLogsActionTypeIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='auditLogs'
      target='actionTypeId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label={translate('catalogs.auditLogs.fields.id')} />
        <DateField source='date' label={translate('catalogs.auditLogs.fields.date')} showTime />
        <TextField source='title' label={translate('catalogs.auditLogs.fields.title')} />
        <BooleanField source='success' label={translate('catalogs.auditLogs.fields.success')} />
        <TextField source='error' label={translate('catalogs.auditLogs.fields.error')} />
        <ReferenceField source='entityTypeId' label={translate('catalogs.auditLogs.fields.entityTypeId')} reference='entities' link='show' />
        <TextField source='entityId' label={translate('catalogs.auditLogs.fields.entityId')} />
        <ReferenceField source='actionTypeId' label={translate('catalogs.auditLogs.fields.actionTypeId')} reference='auditLogActionTypes' link='show' />
        <ReferenceField source='managerId' label={translate('catalogs.auditLogs.fields.managerId')} reference='managers' link='show' />
        <ReferenceField source='userId' label={translate('catalogs.auditLogs.fields.userId')} reference='users' link='show' />
        <BooleanField source='foreign' label={translate('catalogs.auditLogs.fields.foreign')} />
        <TextField source='foreignEntityType' label={translate('catalogs.auditLogs.fields.foreignEntityType')} />
        <TextField source='foreignEntityId' label={translate('catalogs.auditLogs.fields.foreignEntityId')} />
        <TextField source='actionData' label={translate('catalogs.auditLogs.fields.actionData')} />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default AuditLogsActionTypeIdTab;
