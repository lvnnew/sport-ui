/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import WscUserFilter from './WscUserFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'wscUsers.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultWscUserList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.wscUsers.title.plural'
      filters={<WscUserFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.wscUsers.fields.id' />
        <TextField source='login' label='catalogs.wscUsers.fields.login' />
        <TextField source='passwordHash' label='catalogs.wscUsers.fields.passwordHash' />
        <TextField source='accessToken' label='catalogs.wscUsers.fields.accessToken' />
      </Datagrid>
    </List>
  );
};

export default DefaultWscUserList;
