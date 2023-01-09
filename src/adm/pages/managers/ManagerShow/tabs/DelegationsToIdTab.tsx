/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  NumberField,
  TextField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
  useTranslate,
} from 'react-admin';
import DateField from '../../../../../uiLib/DateField';

// DO NOT EDIT! THIS IS GENERATED FILE

const DelegationsToIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='delegations'
      target='toId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
      >
        <NumberField source='id' label={translate('catalogs.delegations.fields.id')} />
        <ReferenceField source='fromId' label={translate('catalogs.delegations.fields.fromId')} reference='managers' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ReferenceField source='toId' label={translate('catalogs.delegations.fields.toId')} reference='managers' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <DateField source='expiresAt' label={translate('catalogs.delegations.fields.expiresAt')} />
        <BooleanField source='active' label={translate('catalogs.delegations.fields.active')} />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default DelegationsToIdTab;
