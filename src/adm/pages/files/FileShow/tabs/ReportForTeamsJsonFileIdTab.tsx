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

const ReportForTeamsJsonFileIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='reportForTeams'
      target='jsonFileId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.reportForTeams.fields.id' />
        <DateField source='created' label='catalogs.reportForTeams.fields.created' showTime />
        <TextField source='title' label='catalogs.reportForTeams.fields.title' />
        <ReferenceField source='teamForCompetitionId' label='catalogs.reportForTeams.fields.teamForCompetitionId' reference='teamForCompetitions' link='show' />
        <ReferenceField source='matchId' label='catalogs.reportForTeams.fields.matchId' reference='matches' link='show' />
        <ReferenceField source='clubId' label='catalogs.reportForTeams.fields.clubId' reference='clubs' link='show' />
        <DateField source='lastUpdated' label='catalogs.reportForTeams.fields.lastUpdated' />
        <BooleanField source='paid' label='catalogs.reportForTeams.fields.paid' />
        <ReferenceField source='fileId' label='catalogs.reportForTeams.fields.fileId' reference='files' link='show' />
        <ReferenceField source='htmlFileId' label='catalogs.reportForTeams.fields.htmlFileId' reference='files' link='show' />
        <ReferenceField source='jsonFileId' label='catalogs.reportForTeams.fields.jsonFileId' reference='files' link='show' />
        <BooleanField source='needRecalculate' label='catalogs.reportForTeams.fields.needRecalculate' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default ReportForTeamsJsonFileIdTab;
