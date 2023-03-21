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
import MailingMessageFilter from './MailingMessageFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'mailingMessages.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultMailingMessageList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.mailingMessages.title.plural'
      filters={<MailingMessageFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.mailingMessages.fields.id' />
        <ReferenceField source='mailingCampaignId' label='catalogs.mailingMessages.fields.mailingCampaignId' reference='mailingCampaigns' link='show' />
        <ReferenceField source='templateId' label='catalogs.mailingMessages.fields.templateId' reference='messageTemplates' link='show' />
        <ReferenceField source='languageId' label='catalogs.mailingMessages.fields.languageId' reference='languages' link='show' />
        <TextField source='to' label='catalogs.mailingMessages.fields.to' />
        <TextField source='locals' label='catalogs.mailingMessages.fields.locals' />
        <TextField source='localsHash' label='catalogs.mailingMessages.fields.localsHash' />
        <NumberField source='priority' label='catalogs.mailingMessages.fields.priority' />
        <DateField source='dateCreated' label='catalogs.mailingMessages.fields.dateCreated' showTime />
        <DateField source='dateSent' label='catalogs.mailingMessages.fields.dateSent' showTime />
        <TextField source='error' label='catalogs.mailingMessages.fields.error' />
        <TextField source='html' label='catalogs.mailingMessages.fields.html' />
        <TextField source='text' label='catalogs.mailingMessages.fields.text' />
        <TextField source='uniqueKey' label='catalogs.mailingMessages.fields.uniqueKey' />
        <TextField source='subject' label='catalogs.mailingMessages.fields.subject' />
        <ReferenceField source='mailingMessageStatusId' label='catalogs.mailingMessages.fields.mailingMessageStatusId' reference='mailingMessageStatuses' link='show' />
        <ReferenceField source='messageTemplateLangVariantId' label='catalogs.mailingMessages.fields.messageTemplateLangVariantId' reference='messageTemplateLangVariants' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultMailingMessageList;
