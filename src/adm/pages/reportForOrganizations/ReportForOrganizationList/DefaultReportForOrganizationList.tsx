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
import ReportForOrganizationFilter from './ReportForOrganizationFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'reportForOrganizations.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultReportForOrganizationList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.reportForOrganizations.title.plural'
      filters={<ReportForOrganizationFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.reportForOrganizations.fields.id' />
        <TextField source='title' label='catalogs.reportForOrganizations.fields.title' />
        <ReferenceField source='competitionId' label='catalogs.reportForOrganizations.fields.competitionId' reference='competitions' link='show' />
        <ReferenceField source='organizatorId' label='catalogs.reportForOrganizations.fields.organizatorId' reference='organizators' link='show' />
        <DateField source='lastUpdated' label='catalogs.reportForOrganizations.fields.lastUpdated' />
        <BooleanField source='paid' label='catalogs.reportForOrganizations.fields.paid' />
      </Datagrid>
    </List>
  );
};

export default DefaultReportForOrganizationList;
