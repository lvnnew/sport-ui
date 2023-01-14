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
} from 'react-admin';
import RolesToPermissionFilter from './RolesToPermissionFilter';
import {hasPermission} from '../../../../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'rolesToPermissions.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultRolesToPermissionList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.rolesToPermissions.title.plural'
      exporter={false}
      filters={<RolesToPermissionFilter />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label='catalogs.rolesToPermissions.fields.id' />
        <ReferenceField source='roleId' label='catalogs.rolesToPermissions.fields.roleId' reference='roles' link='show' />
        <ReferenceField source='permissionId' label='catalogs.rolesToPermissions.fields.permissionId' reference='permissions' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultRolesToPermissionList;
