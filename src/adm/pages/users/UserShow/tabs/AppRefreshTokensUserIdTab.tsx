/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  NumberField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
  useTranslate,
} from 'react-admin';
import DateField from '../../../../../uiLib/DateField';

// DO NOT EDIT! THIS IS GENERATED FILE

const AppRefreshTokensUserIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='appRefreshTokens'
      target='userId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.appRefreshTokens.fields.id' />
        <DateField source='create' label='catalogs.appRefreshTokens.fields.create' showTime />
        <ReferenceField source='userId' label='catalogs.appRefreshTokens.fields.userId' reference='users' link='show' />
        <TextField source='token' label='catalogs.appRefreshTokens.fields.token' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default AppRefreshTokensUserIdTab;
