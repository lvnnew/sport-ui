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
import ReportForParentFilter from './ReportForParentFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'reportForParents.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultReportForParentList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.reportForParents.title.plural'
      filters={<ReportForParentFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.reportForParents.fields.id' />
        <TextField source='title' label='catalogs.reportForParents.fields.title' />
        <ReferenceField source='playerId' label='catalogs.reportForParents.fields.playerId' reference='players' link='show' />
        <ReferenceField source='matchId' label='catalogs.reportForParents.fields.matchId' reference='matches' link='show' />
        <ReferenceField source='parentId' label='catalogs.reportForParents.fields.parentId' reference='parents' link='show' />
        <DateField source='lastUpdated' label='catalogs.reportForParents.fields.lastUpdated' />
        <BooleanField source='paid' label='catalogs.reportForParents.fields.paid' />
      </Datagrid>
    </List>
  );
};

export default DefaultReportForParentList;
