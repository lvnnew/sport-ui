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
import FormGrid from '../../../../uiLib/FormGrid';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMainTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <FormGrid container spacing={2}>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><NumberField source='id' label={translate('catalogs.rolesToPermissions.fields.id')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='roleId' label={translate('catalogs.rolesToPermissions.fields.roleId')} reference='roles' link='show'>
        <TextField source='title' />
      </ReferenceField></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='permissionId' label={translate('catalogs.rolesToPermissions.fields.permissionId')} reference='permissions' link='show'>
        <TextField source='title' />
      </ReferenceField></FormGrid>
    </FormGrid>
  </Tab>);
};

export default DefaultMainTab;
