/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
  NumberField,
  TextField,
  ReferenceField,
  BooleanField,
  useTranslate,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import AuditLogFilter from './AuditLogFilter';
import {hasPermission} from '../../../../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const CustomBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'auditLogs.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultAuditLogList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List
      title={translate('catalogs.auditLogs.title')}
      exporter={false}
      filters={<AuditLogFilter />}
      bulkActionButtons={<CustomBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label={translate('catalogs.auditLogs.fields.id')} />
        <DateField source='date' label={translate('catalogs.auditLogs.fields.date')} showTime />
        <TextField source='title' label={translate('catalogs.auditLogs.fields.title')} />
        <ReferenceField source='entityTypeId' label={translate('catalogs.auditLogs.fields.entityTypeId')} reference='entities' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <TextField source='entityId' label={translate('catalogs.auditLogs.fields.entityId')} />
        <ReferenceField source='actionTypeId' label={translate('catalogs.auditLogs.fields.actionTypeId')} reference='auditLogActionTypes' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ReferenceField source='managerId' label={translate('catalogs.auditLogs.fields.managerId')} reference='managers' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ReferenceField source='userId' label={translate('catalogs.auditLogs.fields.userId')} reference='users' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <BooleanField source='foreign' label={translate('catalogs.auditLogs.fields.foreign')} />
        <TextField source='foreignEntityType' label={translate('catalogs.auditLogs.fields.foreignEntityType')} />
        <TextField source='foreignEntityId' label={translate('catalogs.auditLogs.fields.foreignEntityId')} />
        <TextField source='actionData' label={translate('catalogs.auditLogs.fields.actionData')} />
      </Datagrid>
    </List>
  );
};

export default DefaultAuditLogList;
