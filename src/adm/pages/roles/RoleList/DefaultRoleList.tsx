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
  BooleanField,
} from 'react-admin';
import RoleFilter from './RoleFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'roles.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultRoleList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.roles.title.plural'
      filters={<RoleFilter />}
      actions={<ListActions />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <TextField source='id' label='catalogs.roles.fields.id' />
        <TextField source='title' label='catalogs.roles.fields.title' />
        <BooleanField source='hasAllPermissions' label='catalogs.roles.fields.hasAllPermissions' />
        <BooleanField source='allTenantsAvailable' label='catalogs.roles.fields.allTenantsAvailable' />
      </Datagrid>
    </List>
  );
};

export default DefaultRoleList;
