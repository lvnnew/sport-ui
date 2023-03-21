/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  BooleanField,
  ReferenceField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import AuditLogFilter from './AuditLogFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'auditLogs.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultAuditLogList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.auditLogs.title.plural'
      filters={<AuditLogFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
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
        <TextField source='managerLogin' label='catalogs.auditLogs.fields.managerLogin' />
        <ReferenceField source='userId' label='catalogs.auditLogs.fields.userId' reference='users' link='show' />
        <BooleanField source='foreign' label='catalogs.auditLogs.fields.foreign' />
        <TextField source='foreignEntityType' label='catalogs.auditLogs.fields.foreignEntityType' />
        <TextField source='foreignEntityId' label='catalogs.auditLogs.fields.foreignEntityId' />
      </Datagrid>
    </List>
  );
};

export default DefaultAuditLogList;
