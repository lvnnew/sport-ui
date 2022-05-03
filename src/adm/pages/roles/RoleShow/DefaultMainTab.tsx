/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  TextField,
  BooleanField,
  useTranslate,
} from 'react-admin';
import {Grid} from '@mui/material';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMainTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='id' label={translate('catalogs.roles.fields.id')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='title' label={translate('catalogs.roles.fields.title')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><BooleanField source='hasAllPermissions' label={translate('catalogs.roles.fields.hasAllPermissions')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><BooleanField source='allTenantsAvailable' label={translate('catalogs.roles.fields.allTenantsAvailable')} /></Grid>
    </Grid>
  </Tab>);
};

export default DefaultMainTab;
