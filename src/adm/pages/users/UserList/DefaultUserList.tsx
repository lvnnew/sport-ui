/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  ReferenceField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import UserFilter from './UserFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'users.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultUserList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.users.title.plural'
      filters={<UserFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.users.fields.id' />
        <TextField source='title' label='catalogs.users.fields.title' />
        <TextField source='lastname' label='catalogs.users.fields.lastname' />
        <TextField source='firstname' label='catalogs.users.fields.firstname' />
        <TextField source='email' label='catalogs.users.fields.email' />
        <ReferenceField source='tenantId' label='catalogs.users.fields.tenantId' reference='tenants' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultUserList;
