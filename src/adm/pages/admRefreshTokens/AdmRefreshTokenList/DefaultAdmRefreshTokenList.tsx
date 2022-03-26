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
import AdmRefreshTokenFilter from './AdmRefreshTokenFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAdmRefreshTokenList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List title={translate('catalogs.admRefreshTokens.title')} exporter={false} filters={<AdmRefreshTokenFilter />} {...props}>
      <Datagrid rowClick='show'>
        <NumberField source='id' label={translate('catalogs.admRefreshTokens.fields.id')} />
        <DateField source='create' label={translate('catalogs.admRefreshTokens.fields.create')} showTime />
        <ReferenceField source='managerId' label={translate('catalogs.admRefreshTokens.fields.managerId')} reference='managers' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <TextField source='token' label={translate('catalogs.admRefreshTokens.fields.token')} />
      </Datagrid>
    </List>
  );
};

export default DefaultAdmRefreshTokenList;
