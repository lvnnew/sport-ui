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

// DO NOT EDIT! THIS IS GENERATED FILE

const AppLoginsUserIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='appLogins'
      target='userId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
      >
        <NumberField source='id' label={translate('catalogs.appLogins.fields.id')} />
        <TextField source='login' label={translate('catalogs.appLogins.fields.login')} />
        <TextField source='passwordHash' label={translate('catalogs.appLogins.fields.passwordHash')} />
        <ReferenceField source='userId' label={translate('catalogs.appLogins.fields.userId')} reference='users' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default AppLoginsUserIdTab;
