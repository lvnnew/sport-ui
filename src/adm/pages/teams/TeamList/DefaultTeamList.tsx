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
import TeamFilter from './TeamFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'teams.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultTeamList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.teams.title.plural'
      filters={<TeamFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.teams.fields.id' />
        <TextField source='title' label='catalogs.teams.fields.title' />
        <NumberField source='dateOfBirthFrom' label='catalogs.teams.fields.dateOfBirthFrom' />
        <NumberField source='dateOfBirthTo' label='catalogs.teams.fields.dateOfBirthTo' />
        <ReferenceField source='createdByManagerId' label='catalogs.teams.fields.createdByManagerId' reference='managers' link='show' />
        <ReferenceField source='lastChangedByManagerId' label='catalogs.teams.fields.lastChangedByManagerId' reference='managers' link='show' />
        <ReferenceField source='clubId' label='catalogs.teams.fields.clubId' reference='clubs' link='show' />
        <ReferenceField source='fileId' label='catalogs.teams.fields.fileId' reference='files' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultTeamList;
