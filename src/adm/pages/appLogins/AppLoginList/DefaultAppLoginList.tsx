/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  ReferenceField,
  useTranslate,
} from 'react-admin';
import AppLoginFilter from './AppLoginFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAppLoginList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List title={translate('catalogs.appLogins.title')} exporter={false} filters={<AppLoginFilter />} {...props}>
      <Datagrid rowClick='show'>
        <NumberField source='id' label={translate('catalogs.appLogins.fields.id')} />
        <TextField source='login' label={translate('catalogs.appLogins.fields.login')} />
        <TextField source='passwordHash' label={translate('catalogs.appLogins.fields.passwordHash')} />
        <ReferenceField source='userId' label={translate('catalogs.appLogins.fields.userId')} reference='users' link='show'>
          <TextField source='title' />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

export default DefaultAppLoginList;
