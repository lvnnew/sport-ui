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
    <List title={translate('catalogs.admRefreshTokens')} exporter={false} filters={<AdmRefreshTokenFilter />} {...props}>
      <Datagrid rowClick='show'>
        <NumberField source='id' />
        <DateField source='create' showTime />
        <ReferenceField source='managerId' reference='managers' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <TextField source='token' />
      </Datagrid>
    </List>
  );
};

export default DefaultAdmRefreshTokenList;
