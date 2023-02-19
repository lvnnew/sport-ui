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
  BooleanField,
  ReferenceField,
} from 'react-admin';
import ManagerLoginFilter from './ManagerLoginFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'managerLogins.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultManagerLoginList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.managerLogins.title.plural'
      filters={<ManagerLoginFilter />}
      actions={<ListActions />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label='catalogs.managerLogins.fields.id' />
        <TextField source='login' label='catalogs.managerLogins.fields.login' />
        <TextField source='passwordHash' label='catalogs.managerLogins.fields.passwordHash' />
        <BooleanField source='emailVerified' label='catalogs.managerLogins.fields.emailVerified' />
        <BooleanField source='initialPasswordChanged' label='catalogs.managerLogins.fields.initialPasswordChanged' />
        <BooleanField source='locked' label='catalogs.managerLogins.fields.locked' />
        <ReferenceField source='managerId' label='catalogs.managerLogins.fields.managerId' reference='managers' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultManagerLoginList;
