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

const OrganizatorsCreatedByManagerIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='organizators'
      target='createdByManagerId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.organizators.fields.id' />
        <TextField source='title' label='catalogs.organizators.fields.title' />
        <ReferenceField source='createdByManagerId' label='catalogs.organizators.fields.createdByManagerId' reference='managers' link='show' />
        <ReferenceField source='lastChangedByManagerId' label='catalogs.organizators.fields.lastChangedByManagerId' reference='managers' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default OrganizatorsCreatedByManagerIdTab;
