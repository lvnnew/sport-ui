/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  NumberField,
  TextField,
  ReferenceField,
  Labeled,
} from 'react-admin';
import {Grid} from '@mui/material';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMainTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <NumberField source='id' label='catalogs.teamForCompetitions.fields.id' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='title' label='catalogs.teamForCompetitions.fields.title' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='fullTitle' label='catalogs.teamForCompetitions.fields.fullTitle' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <ReferenceField source='teamId' label='catalogs.teamForCompetitions.fields.teamId' reference='teams' link='show' />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <ReferenceField source='competitionId' label='catalogs.teamForCompetitions.fields.competitionId' reference='competitions' link='show' />
        </Labeled>
      </Grid>
    </Grid>
  </Tab>);
};

export default DefaultMainTab;
