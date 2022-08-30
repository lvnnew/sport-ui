/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
  TextField,
  useTranslate,
} from 'react-admin';
import AuditLogActionTypeFilter from './AuditLogActionTypeFilter';
import {hasPermission} from '../../../../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const CustomBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'auditLogActionTypes.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultAuditLogActionTypeList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List
      title={translate('catalogs.auditLogActionTypes.title')}
      exporter={false}
      filters={<AuditLogActionTypeFilter />}
      bulkActionButtons={<CustomBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <TextField source='id' label={translate('catalogs.auditLogActionTypes.fields.id')} />
        <TextField source='title' label={translate('catalogs.auditLogActionTypes.fields.title')} />
      </Datagrid>
    </List>
  );
};

export default DefaultAuditLogActionTypeList;
