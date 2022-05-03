/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  TextField,
  BooleanField,
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
          <TextField source='id' label={translate('catalogs.autogenerationRules.fields.id')} />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='title' label={translate('catalogs.autogenerationRules.fields.title')} />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <DateField source='version' label={translate('catalogs.autogenerationRules.fields.version')} />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='originalEntityType' label={translate('catalogs.autogenerationRules.fields.originalEntityType')} />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='generatingEntityType' label={translate('catalogs.autogenerationRules.fields.generatingEntityType')} />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='originalEntityFilter' label={translate('catalogs.autogenerationRules.fields.originalEntityFilter')} />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='generatingEntityConstructionRules' label={translate('catalogs.autogenerationRules.fields.generatingEntityConstructionRules')} />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='ignoreVersionOnHistory' label={translate('catalogs.autogenerationRules.fields.ignoreVersionOnHistory')} />
        </Labeled>
      </Grid>
    </Grid>
  </Tab>);
};

export default DefaultMainTab;
