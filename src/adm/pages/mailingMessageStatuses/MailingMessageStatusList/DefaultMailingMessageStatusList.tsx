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
  useTranslate,
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
  const translate = useTranslate();

  return (
    <List
      title={translate('catalogs.mailingMessageStatuses.title.plural')}
      exporter={false}
      filters={<MailingMessageStatusFilter />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <TextField source='id' label={translate('catalogs.mailingMessageStatuses.fields.id')} />
        <TextField source='title' label={translate('catalogs.mailingMessageStatuses.fields.title')} />
        <BooleanField source='final' label={translate('catalogs.mailingMessageStatuses.fields.final')} />
      </Datagrid>
    </List>
  );
};

export default DefaultMailingMessageStatusList;
