/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  NumberField,
  TextField,
  ReferenceField,
  useTranslate,
  Labeled,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import {Grid} from '@mui/material';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMainTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <NumberField source='id' label='catalogs.mailingCampaigns.fields.id' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='title' label='catalogs.mailingCampaigns.fields.title' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <ReferenceField source='mailingTypeId' label='catalogs.mailingCampaigns.fields.mailingTypeId' reference='mailingTypes' link='show' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <NumberField source='priority' label='catalogs.mailingCampaigns.fields.priority' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <DateField source='date' label='catalogs.mailingCampaigns.fields.date' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <ReferenceField source='mailingCampaignStatusId' label='catalogs.mailingCampaigns.fields.mailingCampaignStatusId' reference='mailingCampaignStatuses' link='show' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <ReferenceField source='messageTemplateId' label='catalogs.mailingCampaigns.fields.messageTemplateId' reference='messageTemplates' link='show' />
        </Labeled>
      </Grid>
    </Grid>
  </Tab>);
};

export default DefaultMainTab;
