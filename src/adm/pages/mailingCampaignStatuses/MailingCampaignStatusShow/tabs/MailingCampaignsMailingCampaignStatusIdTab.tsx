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
} from 'react-admin';
import DateField from '../../../../../uiLib/DateField';

// DO NOT EDIT! THIS IS GENERATED FILE

const MailingCampaignsMailingCampaignStatusIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='mailingCampaigns'
      target='mailingCampaignStatusId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.mailingCampaigns.fields.id' />
        <TextField source='title' label='catalogs.mailingCampaigns.fields.title' />
        <ReferenceField source='mailingTypeId' label='catalogs.mailingCampaigns.fields.mailingTypeId' reference='mailingTypes' link='show' />
        <NumberField source='priority' label='catalogs.mailingCampaigns.fields.priority' />
        <DateField source='date' label='catalogs.mailingCampaigns.fields.date' />
        <ReferenceField source='mailingCampaignStatusId' label='catalogs.mailingCampaigns.fields.mailingCampaignStatusId' reference='mailingCampaignStatuses' link='show' />
        <ReferenceField source='messageTemplateId' label='catalogs.mailingCampaigns.fields.messageTemplateId' reference='messageTemplates' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default MailingCampaignsMailingCampaignStatusIdTab;
