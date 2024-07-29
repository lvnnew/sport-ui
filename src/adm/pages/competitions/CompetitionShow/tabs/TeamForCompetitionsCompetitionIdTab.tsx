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

const TeamForCompetitionsCompetitionIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='teamForCompetitions'
      target='competitionId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.teamForCompetitions.fields.id' />
        <TextField source='title' label='catalogs.teamForCompetitions.fields.title' />
        <TextField source='fullTitle' label='catalogs.teamForCompetitions.fields.fullTitle' />
        <ReferenceField source='teamId' label='catalogs.teamForCompetitions.fields.teamId' reference='teams' link='show' />
        <ReferenceField source='competitionId' label='catalogs.teamForCompetitions.fields.competitionId' reference='competitions' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default TeamForCompetitionsCompetitionIdTab;
