/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  TextField,
  BooleanField,
  useTranslate,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import {Grid} from '@mui/material';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMainTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='id' label={translate('catalogs.autogenerationRules.fields.id')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='title' label={translate('catalogs.autogenerationRules.fields.title')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><DateField source='version' label={translate('catalogs.autogenerationRules.fields.version')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='originalEntityType' label={translate('catalogs.autogenerationRules.fields.originalEntityType')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='generatingEntityType' label={translate('catalogs.autogenerationRules.fields.generatingEntityType')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='originalEntityFilter' label={translate('catalogs.autogenerationRules.fields.originalEntityFilter')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='generatingEntityConstructionRules' label={translate('catalogs.autogenerationRules.fields.generatingEntityConstructionRules')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><BooleanField source='ignoreVersionOnHistory' label={translate('catalogs.autogenerationRules.fields.ignoreVersionOnHistory')} /></Grid>
    </Grid>
  </Tab>);
};

export default DefaultMainTab;
