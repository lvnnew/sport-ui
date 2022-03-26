/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  NumberField,
  TextField,
  ReferenceField,
  useTranslate,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import FormGrid from '../../../../uiLib/FormGrid';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMainTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <FormGrid container spacing={2}>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><NumberField source='id' label={translate('catalogs.appRefreshTokens.fields.id')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><DateField source='create' label={translate('catalogs.appRefreshTokens.fields.create')} showTime /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='userId' label={translate('catalogs.appRefreshTokens.fields.userId')} reference='users' link='show'>
        <TextField source='title' />
      </ReferenceField></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='token' label={translate('catalogs.appRefreshTokens.fields.token')} /></FormGrid>
    </FormGrid>
  </Tab>);
};

export default DefaultMainTab;
