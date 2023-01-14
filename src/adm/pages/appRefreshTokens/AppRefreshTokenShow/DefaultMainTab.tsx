/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  NumberField,
  TextField,
  ReferenceField,
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
          <NumberField source='id' label='catalogs.appRefreshTokens.fields.id' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <DateField source='create' label='catalogs.appRefreshTokens.fields.create' showTime />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <ReferenceField source='userId' label='catalogs.appRefreshTokens.fields.userId' reference='users' link='show' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='token' label='catalogs.appRefreshTokens.fields.token' />
        </Labeled>
      </Grid>
    </Grid>
  </Tab>);
};

export default DefaultMainTab;
