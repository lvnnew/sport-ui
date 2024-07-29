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
import PlayerForCompetitionTeamFilter from './PlayerForCompetitionTeamFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'playerForCompetitionTeams.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultPlayerForCompetitionTeamList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.playerForCompetitionTeams.title.plural'
      filters={<PlayerForCompetitionTeamFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.playerForCompetitionTeams.fields.id' />
        <ReferenceField source='teamForCompetitionId' label='catalogs.playerForCompetitionTeams.fields.teamForCompetitionId' reference='teamForCompetitions' link='show' />
        <ReferenceField source='playerId' label='catalogs.playerForCompetitionTeams.fields.playerId' reference='players' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultPlayerForCompetitionTeamList;
