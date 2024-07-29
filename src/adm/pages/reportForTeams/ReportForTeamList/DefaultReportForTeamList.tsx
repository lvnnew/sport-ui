/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  ReferenceField,
  BooleanField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import ReportForTeamFilter from './ReportForTeamFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'reportForTeams.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultReportForTeamList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.reportForTeams.title.plural'
      filters={<ReportForTeamFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.reportForTeams.fields.id' />
        <DateField source='created' label='catalogs.reportForTeams.fields.created' showTime />
        <TextField source='title' label='catalogs.reportForTeams.fields.title' />
        <ReferenceField source='teamForCompetitionId' label='catalogs.reportForTeams.fields.teamForCompetitionId' reference='teamForCompetitions' link='show' />
        <ReferenceField source='matchId' label='catalogs.reportForTeams.fields.matchId' reference='matches' link='show' />
        <ReferenceField source='clubId' label='catalogs.reportForTeams.fields.clubId' reference='clubs' link='show' />
        <DateField source='lastUpdated' label='catalogs.reportForTeams.fields.lastUpdated' />
        <BooleanField source='paid' label='catalogs.reportForTeams.fields.paid' />
      </Datagrid>
    </List>
  );
};

export default DefaultReportForTeamList;
