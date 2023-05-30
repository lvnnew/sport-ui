/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  NumberField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
} from 'react-admin';
import DateField from '../../../../../uiLib/DateField';

// DO NOT EDIT! THIS IS GENERATED FILE

const MailingMessagesMailingMessageStatusIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='mailingMessages'
      target='mailingMessageStatusId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
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
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default MailingMessagesMailingMessageStatusIdTab;
