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
          <NumberField source='id' label={translate('catalogs.delegations.fields.id')} />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <ReferenceField source='fromId' label={translate('catalogs.delegations.fields.fromId')} reference='managers' link='show'>
            <TextField source='title' />
          </ReferenceField>
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <ReferenceField source='toId' label={translate('catalogs.delegations.fields.toId')} reference='managers' link='show'>
            <TextField source='title' />
          </ReferenceField>
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <DateField source='expiresAt' label={translate('catalogs.delegations.fields.expiresAt')} />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='active' label={translate('catalogs.delegations.fields.active')} />
        </Labeled>
      </Grid>
    </Grid>
  </Tab>);
};

export default DefaultMainTab;
