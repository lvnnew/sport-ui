/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import AuditLogActionTypeFilter from './AuditLogActionTypeFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'auditLogActionTypes.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultAuditLogActionTypeList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.auditLogActionTypes.title.plural'
      filters={<AuditLogActionTypeFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <TextField source='id' label='catalogs.auditLogActionTypes.fields.id' />
        <TextField source='title' label='catalogs.auditLogActionTypes.fields.title' />
      </Datagrid>
    </List>
  );
};

export default DefaultAuditLogActionTypeList;
