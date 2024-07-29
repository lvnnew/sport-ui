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
import PlayerForTeamMatchListFilter from './PlayerForTeamMatchListFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'playerForTeamMatchLists.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultPlayerForTeamMatchListList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.playerForTeamMatchLists.title.plural'
      filters={<PlayerForTeamMatchListFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.playerForTeamMatchLists.fields.id' />
        <ReferenceField source='teamMatchListId' label='catalogs.playerForTeamMatchLists.fields.teamMatchListId' reference='teamMatchLists' link='show' />
        <ReferenceField source='playerId' label='catalogs.playerForTeamMatchLists.fields.playerId' reference='players' link='show' />
        <BooleanField source='startingPosition' label='catalogs.playerForTeamMatchLists.fields.startingPosition' />
        <ReferenceField source='playerRoleId' label='catalogs.playerForTeamMatchLists.fields.playerRoleId' reference='playerRoles' link='show' />
        <NumberField source='playerOnMatchNumber' label='catalogs.playerForTeamMatchLists.fields.playerOnMatchNumber' />
      </Datagrid>
    </List>
  );
};

export default DefaultPlayerForTeamMatchListList;
