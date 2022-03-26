/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
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
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='id' label={translate('catalogs.messageTemplates.fields.id')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='title' label={translate('catalogs.messageTemplates.fields.title')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><BooleanField source='secretData' label={translate('catalogs.messageTemplates.fields.secretData')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='messageTypeId' label={translate('catalogs.messageTemplates.fields.messageTypeId')} reference='messageTypes' link='show'>
        <TextField source='title' />
      </ReferenceField></FormGrid>
    </FormGrid>
  </Tab>);
};

export default DefaultMainTab;
