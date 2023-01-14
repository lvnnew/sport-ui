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

const MailingCampaignsMessageTemplateIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='mailingCampaigns'
      target='messageTemplateId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label={translate('catalogs.mailingCampaigns.fields.id')} />
        <TextField source='title' label={translate('catalogs.mailingCampaigns.fields.title')} />
        <ReferenceField source='mailingTypeId' label={translate('catalogs.mailingCampaigns.fields.mailingTypeId')} reference='mailingTypes' link='show' />
        <NumberField source='priority' label={translate('catalogs.mailingCampaigns.fields.priority')} />
        <DateField source='date' label={translate('catalogs.mailingCampaigns.fields.date')} />
        <ReferenceField source='mailingCampaignStatusId' label={translate('catalogs.mailingCampaigns.fields.mailingCampaignStatusId')} reference='mailingCampaignStatuses' link='show' />
        <ReferenceField source='messageTemplateId' label={translate('catalogs.mailingCampaigns.fields.messageTemplateId')} reference='messageTemplates' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default MailingCampaignsMessageTemplateIdTab;
