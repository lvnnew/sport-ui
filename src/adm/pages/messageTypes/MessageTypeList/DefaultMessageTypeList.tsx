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
} from 'react-admin';
import MessageTypeFilter from './MessageTypeFilter';
import {hasPermission} from '../../../../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'messageTypes.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultMessageTypeList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.messageTypes.title.plural'
      exporter={false}
      filters={<MessageTypeFilter />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <TextField source='id' label='catalogs.messageTypes.fields.id' />
        <TextField source='title' label='catalogs.messageTypes.fields.title' />
        <TextField source='description' label='catalogs.messageTypes.fields.description' />
      </Datagrid>
    </List>
  );
};

export default DefaultMessageTypeList;
