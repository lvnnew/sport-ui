/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  NumberField,
  TextField,
  ReferenceField,
  BooleanField,
  useTranslate,
} from 'react-admin';
import {Grid} from '@mui/material';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMainTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3} lg={2}><NumberField source='id' label={translate('catalogs.managers.fields.id')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='title' label={translate('catalogs.managers.fields.title')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='lastName' label={translate('catalogs.managers.fields.lastName')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='firstName' label={translate('catalogs.managers.fields.firstName')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='languageId' label={translate('catalogs.managers.fields.languageId')} reference='languages' link='show'>
        <TextField source='title' />
      </ReferenceField></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='email' label={translate('catalogs.managers.fields.email')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='phone' label={translate('catalogs.managers.fields.phone')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='photo' label={translate('catalogs.managers.fields.photo')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='telegramLogin' label={translate('catalogs.managers.fields.telegramLogin')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='unitId' label={translate('catalogs.managers.fields.unitId')} reference='units' link='show'>
        <TextField source='title' />
      </ReferenceField></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><BooleanField source='headOfUnit' label={translate('catalogs.managers.fields.headOfUnit')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><BooleanField source='active' label={translate('catalogs.managers.fields.active')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='tenantId' label={translate('catalogs.managers.fields.tenantId')} reference='tenants' link='show'>
        <TextField source='title' />
      </ReferenceField></Grid>
    </Grid>
  </Tab>);
};

export default DefaultMainTab;
