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
  ReferenceField,
  useTranslate,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import MailingMessageFilter from './MailingMessageFilter';
import {hasPermission} from '../../../../utils/permissions';

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
  const translate = useTranslate();

  return (
    <List
      title={translate('catalogs.mailingMessages.title.plural')}
      exporter={false}
      filters={<MailingMessageFilter />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label={translate('catalogs.mailingMessages.fields.id')} />
        <ReferenceField source='mailingCampaignId' label={translate('catalogs.mailingMessages.fields.mailingCampaignId')} reference='mailingCampaigns' link='show' />
        <ReferenceField source='templateId' label={translate('catalogs.mailingMessages.fields.templateId')} reference='messageTemplates' link='show' />
        <ReferenceField source='languageId' label={translate('catalogs.mailingMessages.fields.languageId')} reference='languages' link='show' />
        <TextField source='to' label={translate('catalogs.mailingMessages.fields.to')} />
        <TextField source='locals' label={translate('catalogs.mailingMessages.fields.locals')} />
        <TextField source='localsHash' label={translate('catalogs.mailingMessages.fields.localsHash')} />
        <NumberField source='priority' label={translate('catalogs.mailingMessages.fields.priority')} />
        <DateField source='dateCreated' label={translate('catalogs.mailingMessages.fields.dateCreated')} showTime />
        <DateField source='dateSent' label={translate('catalogs.mailingMessages.fields.dateSent')} showTime />
        <TextField source='error' label={translate('catalogs.mailingMessages.fields.error')} />
        <TextField source='html' label={translate('catalogs.mailingMessages.fields.html')} />
        <TextField source='text' label={translate('catalogs.mailingMessages.fields.text')} />
        <TextField source='uniqueKey' label={translate('catalogs.mailingMessages.fields.uniqueKey')} />
        <TextField source='subject' label={translate('catalogs.mailingMessages.fields.subject')} />
        <ReferenceField source='mailingMessageStatusId' label={translate('catalogs.mailingMessages.fields.mailingMessageStatusId')} reference='mailingMessageStatuses' link='show' />
        <ReferenceField source='messageTemplateLangVariantId' label={translate('catalogs.mailingMessages.fields.messageTemplateLangVariantId')} reference='messageTemplateLangVariants' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultMailingMessageList;
