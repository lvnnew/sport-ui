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

const TeamsFileIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='teams'
      target='fileId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.teams.fields.id' />
        <TextField source='title' label='catalogs.teams.fields.title' />
        <NumberField source='dateOfBirthFrom' label='catalogs.teams.fields.dateOfBirthFrom' />
        <NumberField source='dateOfBirthTo' label='catalogs.teams.fields.dateOfBirthTo' />
        <ReferenceField source='createdByManagerId' label='catalogs.teams.fields.createdByManagerId' reference='managers' link='show' />
        <ReferenceField source='lastChangedByManagerId' label='catalogs.teams.fields.lastChangedByManagerId' reference='managers' link='show' />
        <ReferenceField source='clubId' label='catalogs.teams.fields.clubId' reference='clubs' link='show' />
        <ReferenceField source='fileId' label='catalogs.teams.fields.fileId' reference='files' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default TeamsFileIdTab;
