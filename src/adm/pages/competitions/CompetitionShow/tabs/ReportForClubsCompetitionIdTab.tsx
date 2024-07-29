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
} from 'react-admin';
import DateField from '../../../../../uiLib/DateField';

// DO NOT EDIT! THIS IS GENERATED FILE

const ReportForClubsCompetitionIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='reportForClubs'
      target='competitionId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.reportForClubs.fields.id' />
        <TextField source='title' label='catalogs.reportForClubs.fields.title' />
        <ReferenceField source='teamId' label='catalogs.reportForClubs.fields.teamId' reference='teams' link='show' />
        <ReferenceField source='competitionId' label='catalogs.reportForClubs.fields.competitionId' reference='competitions' link='show' />
        <ReferenceField source='clubId' label='catalogs.reportForClubs.fields.clubId' reference='clubs' link='show' />
        <DateField source='lastUpdated' label='catalogs.reportForClubs.fields.lastUpdated' />
        <BooleanField source='paid' label='catalogs.reportForClubs.fields.paid' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default ReportForClubsCompetitionIdTab;
