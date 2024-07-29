/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  ReferenceField,
  BooleanField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import MatchFilter from './MatchFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'matches.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultMatchList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.matches.title.plural'
      filters={<MatchFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.matches.fields.id' />
        <TextField source='title' label='catalogs.matches.fields.title' />
        <ReferenceField source='competitionId' label='catalogs.matches.fields.competitionId' reference='competitions' link='show' />
        <DateField source='matchDate' label='catalogs.matches.fields.matchDate' />
        <TextField source='matchTime' label='catalogs.matches.fields.matchTime' />
        <NumberField source='duration' label='catalogs.matches.fields.duration' />
        <TextField source='place' label='catalogs.matches.fields.place' />
        <BooleanField source='active' label='catalogs.matches.fields.active' />
      </Datagrid>
    </List>
  );
};

export default DefaultMatchList;
