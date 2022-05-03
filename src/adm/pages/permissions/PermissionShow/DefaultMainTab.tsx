/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  TextField,
  useTranslate,
  Labeled,
} from 'react-admin';
import {Grid} from '@mui/material';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMainTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='id' label={translate('catalogs.permissions.fields.id')} />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='title' label={translate('catalogs.permissions.fields.title')} />
        </Labeled>
      </Grid>
    </Grid>
  </Tab>);
};

export default DefaultMainTab;
