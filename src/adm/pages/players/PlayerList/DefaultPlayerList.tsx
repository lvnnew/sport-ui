/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  ReferenceField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import PlayerFilter from './PlayerFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'players.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultPlayerList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.players.title.plural'
      filters={<PlayerFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.players.fields.id' />
        <TextField source='firstname' label='catalogs.players.fields.firstname' />
        <TextField source='lastname' label='catalogs.players.fields.lastname' />
        <TextField source='patronymic' label='catalogs.players.fields.patronymic' />
        <TextField source='title' label='catalogs.players.fields.title' />
        <TextField source='playerName' label='catalogs.players.fields.playerName' />
        <NumberField source='number' label='catalogs.players.fields.number' />
        <DateField source='dateOfBirth' label='catalogs.players.fields.dateOfBirth' />
        <ReferenceField source='teamId' label='catalogs.players.fields.teamId' reference='teams' link='show' />
        <ReferenceField source='createdByManagerId' label='catalogs.players.fields.createdByManagerId' reference='managers' link='show' />
        <ReferenceField source='lastChangedByManagerId' label='catalogs.players.fields.lastChangedByManagerId' reference='managers' link='show' />
        <ReferenceField source='parentId' label='catalogs.players.fields.parentId' reference='parents' link='show' />
        <TextField source='linkToProfile' label='catalogs.players.fields.linkToProfile' />
        <NumberField source='playerRating' label='catalogs.players.fields.playerRating' />
        <ReferenceField source='playerRankId' label='catalogs.players.fields.playerRankId' reference='playerRanks' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultPlayerList;
