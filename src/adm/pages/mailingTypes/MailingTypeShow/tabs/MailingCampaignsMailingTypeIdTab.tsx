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
      <Datagrid>
        <NumberField source='id' label={translate('catalogs.mailingCampaigns.fields.id')} />
        <TextField source='title' label={translate('catalogs.mailingCampaigns.fields.title')} />
        <ReferenceField source='mailingTypeId' label={translate('catalogs.mailingCampaigns.fields.mailingTypeId')} reference='mailingTypes' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <NumberField source='priority' label={translate('catalogs.mailingCampaigns.fields.priority')} />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default MailingCampaignsMailingTypeIdTab;
