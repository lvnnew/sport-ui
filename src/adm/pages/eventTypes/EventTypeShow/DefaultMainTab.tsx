/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  TextField,
  NumberField,
  ReferenceField,
  BooleanField,
  Labeled,
} from 'react-admin';
import {Grid} from '@mui/material';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMainTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='id' label='catalogs.eventTypes.fields.id' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='title' label='catalogs.eventTypes.fields.title' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <NumberField source='points' label='catalogs.eventTypes.fields.points' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <ReferenceField source='eventTypeCategoryId' label='catalogs.eventTypes.fields.eventTypeCategoryId' reference='eventTypeCategories' link='show' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <NumberField source='order' label='catalogs.eventTypes.fields.order' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='showInTranslationMode' label='catalogs.eventTypes.fields.showInTranslationMode' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='needForSecondPlayer' label='catalogs.eventTypes.fields.needForSecondPlayer' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='dependsOnPoint' label='catalogs.eventTypes.fields.dependsOnPoint' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='redCard' label='catalogs.eventTypes.fields.redCard' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='yellowCard' label='catalogs.eventTypes.fields.yellowCard' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='calculateBlock' label='catalogs.eventTypes.fields.calculateBlock' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='calculateTakeaway' label='catalogs.eventTypes.fields.calculateTakeaway' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='calculateSelection' label='catalogs.eventTypes.fields.calculateSelection' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='calculateInterseption' label='catalogs.eventTypes.fields.calculateInterseption' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='calculateGuardian' label='catalogs.eventTypes.fields.calculateGuardian' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='calculatePositionError' label='catalogs.eventTypes.fields.calculatePositionError' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='calculateGrossError' label='catalogs.eventTypes.fields.calculateGrossError' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='calculatePositiveDribling' label='catalogs.eventTypes.fields.calculatePositiveDribling' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='calculateNegativeDribling' label='catalogs.eventTypes.fields.calculateNegativeDribling' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='calculatePositiveSgm' label='catalogs.eventTypes.fields.calculatePositiveSgm' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='calculateNegativeSgm' label='catalogs.eventTypes.fields.calculateNegativeSgm' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='calculatePositiveRgm' label='catalogs.eventTypes.fields.calculatePositiveRgm' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='calculateNegativeRgm' label='catalogs.eventTypes.fields.calculateNegativeRgm' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='calculateLosses' label='catalogs.eventTypes.fields.calculateLosses' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='calculateGegenPressing' label='catalogs.eventTypes.fields.calculateGegenPressing' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='calculatePressing' label='catalogs.eventTypes.fields.calculatePressing' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='calculateSaveBall' label='catalogs.eventTypes.fields.calculateSaveBall' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='calculatePositiveTransfer' label='catalogs.eventTypes.fields.calculatePositiveTransfer' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='calculateNegativeTransfer' label='catalogs.eventTypes.fields.calculateNegativeTransfer' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='calculateHit' label='catalogs.eventTypes.fields.calculateHit' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='calculateHitTarget' label='catalogs.eventTypes.fields.calculateHitTarget' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='calculateCorner' label='catalogs.eventTypes.fields.calculateCorner' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='calculateFoul' label='catalogs.eventTypes.fields.calculateFoul' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='calculateOffside' label='catalogs.eventTypes.fields.calculateOffside' />
        </Labeled>
      </Grid>
    </Grid>
  </Tab>);
};

export default DefaultMainTab;
