/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  NumberField,
  TextField,
  useTranslate,
} from 'react-admin';
import {Grid} from '@mui/material';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMainTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3} lg={2}><NumberField source='id' label={translate('catalogs.files.fields.id')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='originalName' label={translate('catalogs.files.fields.originalName')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='url' label={translate('catalogs.files.fields.url')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='mimetype' label={translate('catalogs.files.fields.mimetype')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='s3Key' label={translate('catalogs.files.fields.s3Key')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='eTag' label={translate('catalogs.files.fields.eTag')} /></Grid>
    </Grid>
  </Tab>);
};

export default DefaultMainTab;
