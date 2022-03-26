/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  BooleanField,
  ReferenceField,
  useTranslate,
} from 'react-admin';
import ManagerLoginFilter from './ManagerLoginFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagerLoginList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List title={translate('catalogs.managerLogins.title')} exporter={false} filters={<ManagerLoginFilter />} {...props}>
      <Datagrid rowClick='show'>
        <NumberField source='id' label={translate('catalogs.managerLogins.fields.id')} />
        <TextField source='login' label={translate('catalogs.managerLogins.fields.login')} />
        <TextField source='passwordHash' label={translate('catalogs.managerLogins.fields.passwordHash')} />
        <TextField source='role' label={translate('catalogs.managerLogins.fields.role')} />
        <BooleanField source='emailVerified' label={translate('catalogs.managerLogins.fields.emailVerified')} />
        <BooleanField source='initialPasswordChanged' label={translate('catalogs.managerLogins.fields.initialPasswordChanged')} />
        <BooleanField source='locked' label={translate('catalogs.managerLogins.fields.locked')} />
        <ReferenceField source='managerId' label={translate('catalogs.managerLogins.fields.managerId')} reference='managers' link='show'>
          <TextField source='title' />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

export default DefaultManagerLoginList;
