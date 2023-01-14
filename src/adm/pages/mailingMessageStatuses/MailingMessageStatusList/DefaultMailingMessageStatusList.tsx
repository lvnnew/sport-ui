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
import MailingMessageStatusFilter from './MailingMessageStatusFilter';
import {hasPermission} from '../../../../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'mailingMessageStatuses.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultMailingMessageStatusList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.mailingMessageStatuses.title.plural'
      exporter={false}
      filters={<MailingMessageStatusFilter />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <TextField source='id' label='catalogs.mailingMessageStatuses.fields.id' />
        <TextField source='title' label='catalogs.mailingMessageStatuses.fields.title' />
        <BooleanField source='final' label='catalogs.mailingMessageStatuses.fields.final' />
      </Datagrid>
    </List>
  );
};

export default DefaultMailingMessageStatusList;
