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
import DateField from '../../../../uiLib/DateField';
import ManagersToRoleFilter from './ManagersToRoleFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'managersToRoles.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultManagersToRoleList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.managersToRoles.title.plural'
      filters={<ManagersToRoleFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.managersToRoles.fields.id' />
        <ReferenceField source='managerId' label='catalogs.managersToRoles.fields.managerId' reference='managers' link='show' />
        <ReferenceField source='roleId' label='catalogs.managersToRoles.fields.roleId' reference='roles' link='show' />
        <DateField source='expiresAt' label='catalogs.managersToRoles.fields.expiresAt' />
      </Datagrid>
    </List>
  );
};

export default DefaultManagersToRoleList;
