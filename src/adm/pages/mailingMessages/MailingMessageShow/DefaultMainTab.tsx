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
          <NumberField source='id' label='catalogs.mailingMessages.fields.id' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <ReferenceField source='mailingCampaignId' label='catalogs.mailingMessages.fields.mailingCampaignId' reference='mailingCampaigns' link='show' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <ReferenceField source='templateId' label='catalogs.mailingMessages.fields.templateId' reference='messageTemplates' link='show' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <ReferenceField source='languageId' label='catalogs.mailingMessages.fields.languageId' reference='languages' link='show' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='to' label='catalogs.mailingMessages.fields.to' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='locals' label='catalogs.mailingMessages.fields.locals' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='localsHash' label='catalogs.mailingMessages.fields.localsHash' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <NumberField source='priority' label='catalogs.mailingMessages.fields.priority' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <DateField source='dateCreated' label='catalogs.mailingMessages.fields.dateCreated' showTime />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <DateField source='dateSent' label='catalogs.mailingMessages.fields.dateSent' showTime />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='error' label='catalogs.mailingMessages.fields.error' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='html' label='catalogs.mailingMessages.fields.html' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='text' label='catalogs.mailingMessages.fields.text' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='uniqueKey' label='catalogs.mailingMessages.fields.uniqueKey' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='subject' label='catalogs.mailingMessages.fields.subject' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <ReferenceField source='mailingMessageStatusId' label='catalogs.mailingMessages.fields.mailingMessageStatusId' reference='mailingMessageStatuses' link='show' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <ReferenceField source='messageTemplateLangVariantId' label='catalogs.mailingMessages.fields.messageTemplateLangVariantId' reference='messageTemplateLangVariants' link='show' />
        </Labeled>
      </Grid>
    </Grid>
  </Tab>);
};

export default DefaultMainTab;
