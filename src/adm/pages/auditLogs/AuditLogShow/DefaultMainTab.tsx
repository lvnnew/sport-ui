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
import FormGrid from '../../../../uiLib/FormGrid';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMainTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <FormGrid container spacing={2}>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><NumberField source='id' label={translate('catalogs.auditLogs.fields.id')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><DateField source='date' label={translate('catalogs.auditLogs.fields.date')} showTime /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='title' label={translate('catalogs.auditLogs.fields.title')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='entityTypeId' label={translate('catalogs.auditLogs.fields.entityTypeId')} reference='entities' link='show'>
        <TextField source='title' />
      </ReferenceField></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='entityId' label={translate('catalogs.auditLogs.fields.entityId')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='actionTypeId' label={translate('catalogs.auditLogs.fields.actionTypeId')} reference='auditLogActionTypes' link='show'>
        <TextField source='title' />
      </ReferenceField></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='managerId' label={translate('catalogs.auditLogs.fields.managerId')} reference='managers' link='show'>
        <TextField source='title' />
      </ReferenceField></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='userId' label={translate('catalogs.auditLogs.fields.userId')} reference='users' link='show'>
        <TextField source='title' />
      </ReferenceField></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><BooleanField source='foreign' label={translate('catalogs.auditLogs.fields.foreign')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='foreignEntityType' label={translate('catalogs.auditLogs.fields.foreignEntityType')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='foreignEntityId' label={translate('catalogs.auditLogs.fields.foreignEntityId')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='actionData' label={translate('catalogs.auditLogs.fields.actionData')} /></FormGrid>
    </FormGrid>
  </Tab>);
};

export default DefaultMainTab;
