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
import TeamMatchListFilter from './TeamMatchListFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'teamMatchLists.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultTeamMatchListList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.teamMatchLists.title.plural'
      filters={<TeamMatchListFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.teamMatchLists.fields.id' />
        <ReferenceField source='matchId' label='catalogs.teamMatchLists.fields.matchId' reference='matches' link='show' />
        <ReferenceField source='teamForCompetitionId' label='catalogs.teamMatchLists.fields.teamForCompetitionId' reference='teamForCompetitions' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultTeamMatchListList;
