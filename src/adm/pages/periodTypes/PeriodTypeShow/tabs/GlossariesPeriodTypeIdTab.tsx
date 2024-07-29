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

const GlossariesPeriodTypeIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='glossaries'
      target='periodTypeId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.glossaries.fields.id' />
        <TextField source='title' label='catalogs.glossaries.fields.title' />
        <TextField source='description' label='catalogs.glossaries.fields.description' />
        <ReferenceField source='periodTypeId' label='catalogs.glossaries.fields.periodTypeId' reference='periodTypes' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default GlossariesPeriodTypeIdTab;
