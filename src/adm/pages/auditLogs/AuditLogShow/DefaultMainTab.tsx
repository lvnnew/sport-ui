/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  NumberField,
  TextField,
  BooleanField,
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
          <NumberField source='id' label={translate('catalogs.auditLogs.fields.id')} />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <DateField source='date' label={translate('catalogs.auditLogs.fields.date')} showTime />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='title' label={translate('catalogs.auditLogs.fields.title')} />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='success' label={translate('catalogs.auditLogs.fields.success')} />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='error' label={translate('catalogs.auditLogs.fields.error')} />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <ReferenceField source='entityTypeId' label={translate('catalogs.auditLogs.fields.entityTypeId')} reference='entities' link='show'>
            <TextField source='title' />
          </ReferenceField>
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='entityId' label={translate('catalogs.auditLogs.fields.entityId')} />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <ReferenceField source='actionTypeId' label={translate('catalogs.auditLogs.fields.actionTypeId')} reference='auditLogActionTypes' link='show'>
            <TextField source='title' />
          </ReferenceField>
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <ReferenceField source='managerId' label={translate('catalogs.auditLogs.fields.managerId')} reference='managers' link='show'>
            <TextField source='title' />
          </ReferenceField>
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <ReferenceField source='userId' label={translate('catalogs.auditLogs.fields.userId')} reference='users' link='show'>
            <TextField source='title' />
          </ReferenceField>
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <BooleanField source='foreign' label={translate('catalogs.auditLogs.fields.foreign')} />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='foreignEntityType' label={translate('catalogs.auditLogs.fields.foreignEntityType')} />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='foreignEntityId' label={translate('catalogs.auditLogs.fields.foreignEntityId')} />
        </Labeled>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Labeled>
          <TextField source='actionData' label={translate('catalogs.auditLogs.fields.actionData')} />
        </Labeled>
      </Grid>
    </Grid>
  </Tab>);
};

export default DefaultMainTab;
