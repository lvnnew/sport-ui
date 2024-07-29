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
import WscMessageFilter from './WscMessageFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'wscMessages.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultWscMessageList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.wscMessages.title.plural'
      filters={<WscMessageFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.wscMessages.fields.id' />
        <TextField source='externalId' label='catalogs.wscMessages.fields.externalId' />
        <TextField source='dateTimeRaw' label='catalogs.wscMessages.fields.dateTimeRaw' />
        <TextField source='sender' label='catalogs.wscMessages.fields.sender' />
        <TextField source='content' label='catalogs.wscMessages.fields.content' />
        <ReferenceField source='wscUserId' label='catalogs.wscMessages.fields.wscUserId' reference='wscUsers' link='show' />
        <ReferenceField source='wscContactId' label='catalogs.wscMessages.fields.wscContactId' reference='wscContacts' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultWscMessageList;
