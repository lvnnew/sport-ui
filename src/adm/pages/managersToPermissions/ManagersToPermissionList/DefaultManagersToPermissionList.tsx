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
import DateField from '../../../../uiLib/DateField';
import ManagersToPermissionFilter from './ManagersToPermissionFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'managersToPermissions.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultManagersToPermissionList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.managersToPermissions.title.plural'
      filters={<ManagersToPermissionFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.managersToPermissions.fields.id' />
        <ReferenceField source='managerId' label='catalogs.managersToPermissions.fields.managerId' reference='managers' link='show' />
        <ReferenceField source='permissionId' label='catalogs.managersToPermissions.fields.permissionId' reference='permissions' link='show' />
        <DateField source='expiresAt' label='catalogs.managersToPermissions.fields.expiresAt' />
      </Datagrid>
    </List>
  );
};

export default DefaultManagersToPermissionList;
