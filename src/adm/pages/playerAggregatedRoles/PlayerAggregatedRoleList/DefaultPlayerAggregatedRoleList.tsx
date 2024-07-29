/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import PlayerAggregatedRoleFilter from './PlayerAggregatedRoleFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'playerAggregatedRoles.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultPlayerAggregatedRoleList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.playerAggregatedRoles.title.plural'
      filters={<PlayerAggregatedRoleFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <TextField source='id' label='catalogs.playerAggregatedRoles.fields.id' />
        <TextField source='title' label='catalogs.playerAggregatedRoles.fields.title' />
      </Datagrid>
    </List>
  );
};

export default DefaultPlayerAggregatedRoleList;
