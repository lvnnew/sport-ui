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
import PermissionFilter from './PermissionFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'permissions.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultPermissionList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.permissions.title.plural'
      filters={<PermissionFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <TextField source='id' label='catalogs.permissions.fields.id' />
        <TextField source='title' label='catalogs.permissions.fields.title' />
      </Datagrid>
    </List>
  );
};

export default DefaultPermissionList;
