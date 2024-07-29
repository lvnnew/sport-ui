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
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const ParentsLastChangedByManagerIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='parents'
      target='lastChangedByManagerId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.parents.fields.id' />
        <TextField source='title' label='catalogs.parents.fields.title' />
        <TextField source='firstname' label='catalogs.parents.fields.firstname' />
        <TextField source='lastname' label='catalogs.parents.fields.lastname' />
        <TextField source='patronymic' label='catalogs.parents.fields.patronymic' />
        <ReferenceField source='createdByManagerId' label='catalogs.parents.fields.createdByManagerId' reference='managers' link='show' />
        <ReferenceField source='lastChangedByManagerId' label='catalogs.parents.fields.lastChangedByManagerId' reference='managers' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default ParentsLastChangedByManagerIdTab;
