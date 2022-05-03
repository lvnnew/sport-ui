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
import {Grid} from '@mui/material';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMainTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3} lg={2}><NumberField source='id' label={translate('catalogs.appLogins.fields.id')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='login' label={translate('catalogs.appLogins.fields.login')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='passwordHash' label={translate('catalogs.appLogins.fields.passwordHash')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='userId' label={translate('catalogs.appLogins.fields.userId')} reference='users' link='show'>
        <TextField source='title' />
      </ReferenceField></Grid>
    </Grid>
  </Tab>);
};

export default DefaultMainTab;
