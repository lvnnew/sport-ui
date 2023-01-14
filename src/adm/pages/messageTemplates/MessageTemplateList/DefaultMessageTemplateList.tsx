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
  ReferenceField,
} from 'react-admin';
import MessageTemplateFilter from './MessageTemplateFilter';
import {hasPermission} from '../../../../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'messageTemplates.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultMessageTemplateList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.messageTemplates.title.plural'
      exporter={false}
      filters={<MessageTemplateFilter />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <TextField source='id' label='catalogs.messageTemplates.fields.id' />
        <TextField source='title' label='catalogs.messageTemplates.fields.title' />
        <BooleanField source='secretData' label='catalogs.messageTemplates.fields.secretData' />
        <ReferenceField source='messageTypeId' label='catalogs.messageTemplates.fields.messageTypeId' reference='messageTypes' link='show' />
        <TextField source='dataExample' label='catalogs.messageTemplates.fields.dataExample' />
        <ReferenceField source='templateStyleId' label='catalogs.messageTemplates.fields.templateStyleId' reference='templateStyles' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultMessageTemplateList;
