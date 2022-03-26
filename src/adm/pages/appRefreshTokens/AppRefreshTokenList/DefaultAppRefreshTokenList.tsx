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
        <NumberField source='id' />
        <DateField source='create' showTime />
        <ReferenceField source='userId' reference='users' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <TextField source='token' />
      </Datagrid>
    </List>
  );
};

export default DefaultAppRefreshTokenList;
