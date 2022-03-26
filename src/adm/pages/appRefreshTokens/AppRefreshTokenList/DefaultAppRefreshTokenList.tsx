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
import DateField from '../../../../uiLib/DateField';
import AppRefreshTokenFilter from './AppRefreshTokenFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAppRefreshTokenList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List title={translate('catalogs.appRefreshTokens.title')} exporter={false} filters={<AppRefreshTokenFilter />} {...props}>
      <Datagrid rowClick='show'>
        <NumberField source='id' label={translate('catalogs.appRefreshTokens.fields.id')} />
        <DateField source='create' label={translate('catalogs.appRefreshTokens.fields.create')} showTime />
        <ReferenceField source='userId' label={translate('catalogs.appRefreshTokens.fields.userId')} reference='users' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <TextField source='token' label={translate('catalogs.appRefreshTokens.fields.token')} />
      </Datagrid>
    </List>
  );
};

export default DefaultAppRefreshTokenList;
