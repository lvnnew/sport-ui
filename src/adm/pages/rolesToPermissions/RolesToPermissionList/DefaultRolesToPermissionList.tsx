/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  ReferenceField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import RolesToPermissionFilter from './RolesToPermissionFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

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
      filters={<RolesToPermissionFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.rolesToPermissions.fields.id' />
        <ReferenceField source='roleId' label='catalogs.rolesToPermissions.fields.roleId' reference='roles' link='show' />
        <ReferenceField source='permissionId' label='catalogs.rolesToPermissions.fields.permissionId' reference='permissions' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultRolesToPermissionList;
