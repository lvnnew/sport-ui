/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  NumberField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
} from 'react-admin';
import DateField from '../../../../../uiLib/DateField';

// DO NOT EDIT! THIS IS GENERATED FILE

const TeamMatchReportsFileIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='teamMatchReports'
      target='fileId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.teamMatchReports.fields.id' />
        <DateField source='created' label='catalogs.teamMatchReports.fields.created' showTime />
        <ReferenceField source='matchId' label='catalogs.teamMatchReports.fields.matchId' reference='matches' link='show' />
        <DateField source='lastUpdated' label='catalogs.teamMatchReports.fields.lastUpdated' />
        <ReferenceField source='fileId' label='catalogs.teamMatchReports.fields.fileId' reference='files' link='show' />
        <BooleanField source='needRecalculate' label='catalogs.teamMatchReports.fields.needRecalculate' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default TeamMatchReportsFileIdTab;
