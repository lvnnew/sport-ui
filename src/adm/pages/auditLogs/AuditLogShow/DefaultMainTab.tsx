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
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import {Grid} from '@mui/material';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMainTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3} lg={2}><NumberField source='id' label={translate('catalogs.auditLogs.fields.id')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><DateField source='date' label={translate('catalogs.auditLogs.fields.date')} showTime /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='title' label={translate('catalogs.auditLogs.fields.title')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='entityTypeId' label={translate('catalogs.auditLogs.fields.entityTypeId')} reference='entities' link='show'>
        <TextField source='title' />
      </ReferenceField></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='entityId' label={translate('catalogs.auditLogs.fields.entityId')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='actionTypeId' label={translate('catalogs.auditLogs.fields.actionTypeId')} reference='auditLogActionTypes' link='show'>
        <TextField source='title' />
      </ReferenceField></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='managerId' label={translate('catalogs.auditLogs.fields.managerId')} reference='managers' link='show'>
        <TextField source='title' />
      </ReferenceField></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='userId' label={translate('catalogs.auditLogs.fields.userId')} reference='users' link='show'>
        <TextField source='title' />
      </ReferenceField></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><BooleanField source='foreign' label={translate('catalogs.auditLogs.fields.foreign')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='foreignEntityType' label={translate('catalogs.auditLogs.fields.foreignEntityType')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='foreignEntityId' label={translate('catalogs.auditLogs.fields.foreignEntityId')} /></Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}><TextField source='actionData' label={translate('catalogs.auditLogs.fields.actionData')} /></Grid>
    </Grid>
  </Tab>);
};

export default DefaultMainTab;
