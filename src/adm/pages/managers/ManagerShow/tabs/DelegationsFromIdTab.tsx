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

const DelegationsFromIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='delegations'
      target='fromId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.delegations.fields.id' />
        <ReferenceField source='fromId' label='catalogs.delegations.fields.fromId' reference='managers' link='show' />
        <ReferenceField source='toId' label='catalogs.delegations.fields.toId' reference='managers' link='show' />
        <DateField source='expiresAt' label='catalogs.delegations.fields.expiresAt' />
        <BooleanField source='active' label='catalogs.delegations.fields.active' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default DelegationsFromIdTab;
