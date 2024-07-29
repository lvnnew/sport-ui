/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  ReferenceField,
  BooleanField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import HistoryOfPlayerRoleFilter from './HistoryOfPlayerRoleFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'historyOfPlayerRoles.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultHistoryOfPlayerRoleList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.historyOfPlayerRoles.title.plural'
      filters={<HistoryOfPlayerRoleFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.historyOfPlayerRoles.fields.id' />
        <ReferenceField source='matchId' label='catalogs.historyOfPlayerRoles.fields.matchId' reference='matches' link='show' />
        <ReferenceField source='playerId' label='catalogs.historyOfPlayerRoles.fields.playerId' reference='players' link='show' />
        <ReferenceField source='playerRoleId' label='catalogs.historyOfPlayerRoles.fields.playerRoleId' reference='playerRoles' link='show' />
        <BooleanField source='status' label='catalogs.historyOfPlayerRoles.fields.status' />
        <NumberField source='order' label='catalogs.historyOfPlayerRoles.fields.order' />
      </Datagrid>
    </List>
  );
};

export default DefaultHistoryOfPlayerRoleList;
