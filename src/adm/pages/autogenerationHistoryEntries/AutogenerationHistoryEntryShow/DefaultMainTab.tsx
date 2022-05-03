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
          <NumberField source='id' label={translate('catalogs.autogenerationHistoryEntries.fields.id')} />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <DateField source='date' label={translate('catalogs.autogenerationHistoryEntries.fields.date')} showTime />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='originalEntityType' label={translate('catalogs.autogenerationHistoryEntries.fields.originalEntityType')} />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='originalEntityId' label={translate('catalogs.autogenerationHistoryEntries.fields.originalEntityId')} />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <ReferenceField source='autogenerationRuleId' label={translate('catalogs.autogenerationHistoryEntries.fields.autogenerationRuleId')} reference='autogenerationRules' link='show'>
            <TextField source='title' />
          </ReferenceField>
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <DateField source='version' label={translate('catalogs.autogenerationHistoryEntries.fields.version')} />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='errorOccurred' label={translate('catalogs.autogenerationHistoryEntries.fields.errorOccurred')} />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='error' label={translate('catalogs.autogenerationHistoryEntries.fields.error')} />
        </Labeled>
      </Grid>
    </Grid>
  </Tab>);
};

export default DefaultMainTab;
