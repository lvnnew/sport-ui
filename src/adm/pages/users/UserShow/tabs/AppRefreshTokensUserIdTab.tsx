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
      <Datagrid>
        <NumberField source='id' label={translate('catalogs.appRefreshTokens.fields.id')} />
        <DateField source='create' label={translate('catalogs.appRefreshTokens.fields.create')} showTime />
        <ReferenceField source='userId' label={translate('catalogs.appRefreshTokens.fields.userId')} reference='users' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <TextField source='token' label={translate('catalogs.appRefreshTokens.fields.token')} />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default AppRefreshTokensUserIdTab;
