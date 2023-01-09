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

const MailingCampaignsMailingTypeIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='mailingCampaigns'
      target='mailingTypeId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
      >
        <NumberField source='id' label={translate('catalogs.mailingCampaigns.fields.id')} />
        <TextField source='title' label={translate('catalogs.mailingCampaigns.fields.title')} />
        <ReferenceField source='mailingTypeId' label={translate('catalogs.mailingCampaigns.fields.mailingTypeId')} reference='mailingTypes' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <NumberField source='priority' label={translate('catalogs.mailingCampaigns.fields.priority')} />
        <DateField source='date' label={translate('catalogs.mailingCampaigns.fields.date')} />
        <ReferenceField source='mailingCampaignStatusId' label={translate('catalogs.mailingCampaigns.fields.mailingCampaignStatusId')} reference='mailingCampaignStatuses' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ReferenceField source='messageTemplateId' label={translate('catalogs.mailingCampaigns.fields.messageTemplateId')} reference='messageTemplates' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default MailingCampaignsMailingTypeIdTab;
