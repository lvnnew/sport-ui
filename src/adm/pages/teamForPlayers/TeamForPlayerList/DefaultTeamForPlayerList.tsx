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
import TeamForPlayerFilter from './TeamForPlayerFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'teamForPlayers.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultTeamForPlayerList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.teamForPlayers.title.plural'
      filters={<TeamForPlayerFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.teamForPlayers.fields.id' />
        <ReferenceField source='playerId' label='catalogs.teamForPlayers.fields.playerId' reference='players' link='show' />
        <ReferenceField source='teamId' label='catalogs.teamForPlayers.fields.teamId' reference='teams' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultTeamForPlayerList;
