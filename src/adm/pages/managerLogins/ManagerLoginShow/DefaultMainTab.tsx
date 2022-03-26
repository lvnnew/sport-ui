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
} from 'react-admin';
import FormGrid from '../../../../uiLib/FormGrid';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMainTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <FormGrid container spacing={2}>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><NumberField source='id' label={translate('catalogs.managerLogins.fields.id')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='login' label={translate('catalogs.managerLogins.fields.login')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='passwordHash' label={translate('catalogs.managerLogins.fields.passwordHash')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='role' label={translate('catalogs.managerLogins.fields.role')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><BooleanField source='emailVerified' label={translate('catalogs.managerLogins.fields.emailVerified')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><BooleanField source='initialPasswordChanged' label={translate('catalogs.managerLogins.fields.initialPasswordChanged')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><BooleanField source='locked' label={translate('catalogs.managerLogins.fields.locked')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='managerId' label={translate('catalogs.managerLogins.fields.managerId')} reference='managers' link='show'>
        <TextField source='title' />
      </ReferenceField></FormGrid>
    </FormGrid>
  </Tab>);
};

export default DefaultMainTab;
