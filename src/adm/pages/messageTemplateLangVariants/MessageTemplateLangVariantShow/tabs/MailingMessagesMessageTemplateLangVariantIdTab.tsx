/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  NumberField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
  useTranslate,
} from 'react-admin';
import DateField from '../../../../../uiLib/DateField';

// DO NOT EDIT! THIS IS GENERATED FILE

const MailingMessagesMessageTemplateLangVariantIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='mailingMessages'
      target='messageTemplateLangVariantId'
      pagination={<Pagination />}
    >
      <Datagrid>
        <NumberField source='id' label={translate('catalogs.mailingMessages.fields.id')} />
        <ReferenceField source='mailingCampaignId' label={translate('catalogs.mailingMessages.fields.mailingCampaignId')} reference='mailingCampaigns' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ReferenceField source='templateId' label={translate('catalogs.mailingMessages.fields.templateId')} reference='messageTemplates' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ReferenceField source='languageId' label={translate('catalogs.mailingMessages.fields.languageId')} reference='languages' link='show'>
          <TextField source='title' />
        </ReferenceField>
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
        <ReferenceField source='mailingMessageStatusId' label={translate('catalogs.mailingMessages.fields.mailingMessageStatusId')} reference='mailingMessageStatuses' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ReferenceField source='messageTemplateLangVariantId' label={translate('catalogs.mailingMessages.fields.messageTemplateLangVariantId')} reference='messageTemplateLangVariants' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default MailingMessagesMessageTemplateLangVariantIdTab;
