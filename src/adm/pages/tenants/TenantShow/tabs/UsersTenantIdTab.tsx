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

const UsersTenantIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='users'
      target='tenantId'
      pagination={<Pagination />}
    >
      <Datagrid>
        <NumberField source='id' label={translate('catalogs.users.fields.id')} />
        <TextField source='title' label={translate('catalogs.users.fields.title')} />
        <TextField source='lastname' label={translate('catalogs.users.fields.lastname')} />
        <TextField source='firstname' label={translate('catalogs.users.fields.firstname')} />
        <TextField source='email' label={translate('catalogs.users.fields.email')} />
        <ReferenceField source='tenantId' label={translate('catalogs.users.fields.tenantId')} reference='tenants' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default UsersTenantIdTab;
