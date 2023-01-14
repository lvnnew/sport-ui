/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  NumberField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const ManagerLoginsManagerIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='managerLogins'
      target='managerId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label={translate('catalogs.managerLogins.fields.id')} />
        <TextField source='login' label={translate('catalogs.managerLogins.fields.login')} />
        <TextField source='passwordHash' label={translate('catalogs.managerLogins.fields.passwordHash')} />
        <BooleanField source='emailVerified' label={translate('catalogs.managerLogins.fields.emailVerified')} />
        <BooleanField source='initialPasswordChanged' label={translate('catalogs.managerLogins.fields.initialPasswordChanged')} />
        <BooleanField source='locked' label={translate('catalogs.managerLogins.fields.locked')} />
        <ReferenceField source='managerId' label={translate('catalogs.managerLogins.fields.managerId')} reference='managers' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default ManagerLoginsManagerIdTab;
