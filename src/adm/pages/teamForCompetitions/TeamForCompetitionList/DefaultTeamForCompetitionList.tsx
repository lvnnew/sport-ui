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
import TeamForCompetitionFilter from './TeamForCompetitionFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'teamForCompetitions.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultTeamForCompetitionList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.teamForCompetitions.title.plural'
      filters={<TeamForCompetitionFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.teamForCompetitions.fields.id' />
        <TextField source='title' label='catalogs.teamForCompetitions.fields.title' />
        <TextField source='fullTitle' label='catalogs.teamForCompetitions.fields.fullTitle' />
        <ReferenceField source='teamId' label='catalogs.teamForCompetitions.fields.teamId' reference='teams' link='show' />
        <ReferenceField source='competitionId' label='catalogs.teamForCompetitions.fields.competitionId' reference='competitions' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultTeamForCompetitionList;
