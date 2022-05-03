/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  NumberField,
  TextField,
  BooleanField,
  ReferenceField,
  useTranslate,
} from 'react-admin';
import {Grid} from '@mui/material';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMainTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3} lg={2}><NumberField source='id' label={translate('catalogs.managerLogins.fields.id')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='login' label={translate('catalogs.managerLogins.fields.login')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='passwordHash' label={translate('catalogs.managerLogins.fields.passwordHash')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='role' label={translate('catalogs.managerLogins.fields.role')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><BooleanField source='emailVerified' label={translate('catalogs.managerLogins.fields.emailVerified')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><BooleanField source='initialPasswordChanged' label={translate('catalogs.managerLogins.fields.initialPasswordChanged')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><BooleanField source='locked' label={translate('catalogs.managerLogins.fields.locked')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='managerId' label={translate('catalogs.managerLogins.fields.managerId')} reference='managers' link='show'>
        <TextField source='title' />
      </ReferenceField></Grid>
    </Grid>
  </Tab>);
};

export default DefaultMainTab;
