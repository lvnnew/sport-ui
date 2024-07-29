/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  ReferenceField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import TeamMatchReportFilter from './TeamMatchReportFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'teamMatchReports.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultTeamMatchReportList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.teamMatchReports.title.plural'
      filters={<TeamMatchReportFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.teamMatchReports.fields.id' />
        <DateField source='created' label='catalogs.teamMatchReports.fields.created' showTime />
        <ReferenceField source='matchId' label='catalogs.teamMatchReports.fields.matchId' reference='matches' link='show' />
        <DateField source='lastUpdated' label='catalogs.teamMatchReports.fields.lastUpdated' />
      </Datagrid>
    </List>
  );
};

export default DefaultTeamMatchReportList;
