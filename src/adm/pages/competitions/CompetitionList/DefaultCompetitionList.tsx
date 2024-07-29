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
import CompetitionFilter from './CompetitionFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'competitions.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultCompetitionList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.competitions.title.plural'
      filters={<CompetitionFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.competitions.fields.id' />
        <TextField source='title' label='catalogs.competitions.fields.title' />
        <NumberField source='dateOfBirthFrom' label='catalogs.competitions.fields.dateOfBirthFrom' />
        <NumberField source='dateOfBirthTo' label='catalogs.competitions.fields.dateOfBirthTo' />
        <ReferenceField source='organizationId' label='catalogs.competitions.fields.organizationId' reference='organizators' link='show' />
        <ReferenceField source='createdByManagerId' label='catalogs.competitions.fields.createdByManagerId' reference='managers' link='show' />
        <ReferenceField source='lastChangedByManagerId' label='catalogs.competitions.fields.lastChangedByManagerId' reference='managers' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultCompetitionList;
