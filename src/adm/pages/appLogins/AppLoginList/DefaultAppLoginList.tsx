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
import AppLoginFilter from './AppLoginFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'appLogins.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultAppLoginList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.appLogins.title.plural'
      filters={<AppLoginFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.appLogins.fields.id' />
        <TextField source='login' label='catalogs.appLogins.fields.login' />
        <TextField source='passwordHash' label='catalogs.appLogins.fields.passwordHash' />
        <ReferenceField source='userId' label='catalogs.appLogins.fields.userId' reference='users' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultAppLoginList;
