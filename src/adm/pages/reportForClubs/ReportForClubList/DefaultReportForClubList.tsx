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
import ReportForClubFilter from './ReportForClubFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'reportForClubs.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultReportForClubList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.reportForClubs.title.plural'
      filters={<ReportForClubFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.reportForClubs.fields.id' />
        <TextField source='title' label='catalogs.reportForClubs.fields.title' />
        <ReferenceField source='teamId' label='catalogs.reportForClubs.fields.teamId' reference='teams' link='show' />
        <ReferenceField source='competitionId' label='catalogs.reportForClubs.fields.competitionId' reference='competitions' link='show' />
        <ReferenceField source='clubId' label='catalogs.reportForClubs.fields.clubId' reference='clubs' link='show' />
        <DateField source='lastUpdated' label='catalogs.reportForClubs.fields.lastUpdated' />
        <BooleanField source='paid' label='catalogs.reportForClubs.fields.paid' />
      </Datagrid>
    </List>
  );
};

export default DefaultReportForClubList;
