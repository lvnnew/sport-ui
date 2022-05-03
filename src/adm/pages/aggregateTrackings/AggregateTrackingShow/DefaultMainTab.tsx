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
          <NumberField source='id' label={translate('infoRegistries.aggregateTrackings.fields.id')} />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <ReferenceField source='entityTypeId' label={translate('infoRegistries.aggregateTrackings.fields.entityTypeId')} reference='entities' link='show'>
            <TextField source='title' />
          </ReferenceField>
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='entityId' label={translate('infoRegistries.aggregateTrackings.fields.entityId')} />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <DateField source='lastAggregatesComputed' label={translate('infoRegistries.aggregateTrackings.fields.lastAggregatesComputed')} showTime />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <DateField source='lastEntityUpdate' label={translate('infoRegistries.aggregateTrackings.fields.lastEntityUpdate')} showTime />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <NumberField source='aggregateVersion' label={translate('infoRegistries.aggregateTrackings.fields.aggregateVersion')} />
        </Labeled>
      </Grid>
    </Grid>
  </Tab>);
};

export default DefaultMainTab;
