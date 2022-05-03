/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  NumberField,
  TextField,
  ReferenceField,
  useTranslate,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import {Grid} from '@mui/material';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMainTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3} lg={2}><NumberField source='id' label={translate('infoRegistries.aggregateTrackings.fields.id')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='entityTypeId' label={translate('infoRegistries.aggregateTrackings.fields.entityTypeId')} reference='entities' link='show'>
        <TextField source='title' />
      </ReferenceField></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='entityId' label={translate('infoRegistries.aggregateTrackings.fields.entityId')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><DateField source='lastAggregatesComputed' label={translate('infoRegistries.aggregateTrackings.fields.lastAggregatesComputed')} showTime /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><DateField source='lastEntityUpdate' label={translate('infoRegistries.aggregateTrackings.fields.lastEntityUpdate')} showTime /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><NumberField source='aggregateVersion' label={translate('infoRegistries.aggregateTrackings.fields.aggregateVersion')} /></Grid>
    </Grid>
  </Tab>);
};

export default DefaultMainTab;
