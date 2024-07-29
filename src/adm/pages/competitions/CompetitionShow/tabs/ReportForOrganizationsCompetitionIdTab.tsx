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

const ReportForOrganizationsCompetitionIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='reportForOrganizations'
      target='competitionId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.reportForOrganizations.fields.id' />
        <TextField source='title' label='catalogs.reportForOrganizations.fields.title' />
        <ReferenceField source='competitionId' label='catalogs.reportForOrganizations.fields.competitionId' reference='competitions' link='show' />
        <ReferenceField source='organizatorId' label='catalogs.reportForOrganizations.fields.organizatorId' reference='organizators' link='show' />
        <DateField source='lastUpdated' label='catalogs.reportForOrganizations.fields.lastUpdated' />
        <BooleanField source='paid' label='catalogs.reportForOrganizations.fields.paid' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default ReportForOrganizationsCompetitionIdTab;
