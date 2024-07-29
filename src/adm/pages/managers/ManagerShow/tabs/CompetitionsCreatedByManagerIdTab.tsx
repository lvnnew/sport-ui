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

const CompetitionsCreatedByManagerIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='competitions'
      target='createdByManagerId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.competitions.fields.id' />
        <TextField source='title' label='catalogs.competitions.fields.title' />
        <NumberField source='dateOfBirthFrom' label='catalogs.competitions.fields.dateOfBirthFrom' />
        <NumberField source='dateOfBirthTo' label='catalogs.competitions.fields.dateOfBirthTo' />
        <ReferenceField source='organizationId' label='catalogs.competitions.fields.organizationId' reference='organizators' link='show' />
        <ReferenceField source='createdByManagerId' label='catalogs.competitions.fields.createdByManagerId' reference='managers' link='show' />
        <ReferenceField source='lastChangedByManagerId' label='catalogs.competitions.fields.lastChangedByManagerId' reference='managers' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default CompetitionsCreatedByManagerIdTab;
