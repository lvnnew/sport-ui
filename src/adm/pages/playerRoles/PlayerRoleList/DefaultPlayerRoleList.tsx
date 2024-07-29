/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import PlayerRoleFilter from './PlayerRoleFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'playerRoles.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultPlayerRoleList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.playerRoles.title.plural'
      filters={<PlayerRoleFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <TextField source='id' label='catalogs.playerRoles.fields.id' />
        <TextField source='title' label='catalogs.playerRoles.fields.title' />
        <TextField source='shortTitle' label='catalogs.playerRoles.fields.shortTitle' />
        <ReferenceField source='playerAggregatedRoleId' label='catalogs.playerRoles.fields.playerAggregatedRoleId' reference='playerAggregatedRoles' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultPlayerRoleList;
