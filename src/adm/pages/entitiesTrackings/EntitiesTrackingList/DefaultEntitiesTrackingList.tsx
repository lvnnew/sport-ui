/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  ReferenceField,
  TextField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import EntitiesTrackingFilter from './EntitiesTrackingFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'entitiesTrackings.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultEntitiesTrackingList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.entitiesTrackings.title.plural'
      filters={<EntitiesTrackingFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.entitiesTrackings.fields.id' />
        <ReferenceField source='entityTypeId' label='catalogs.entitiesTrackings.fields.entityTypeId' reference='entities' link='show' />
        <TextField source='entityId' label='catalogs.entitiesTrackings.fields.entityId' />
        <DateField source='lastEntityComputed' label='catalogs.entitiesTrackings.fields.lastEntityComputed' showTime />
        <DateField source='lastEntityScheduled' label='catalogs.entitiesTrackings.fields.lastEntityScheduled' showTime />
        <DateField source='lastEntityUpdate' label='catalogs.entitiesTrackings.fields.lastEntityUpdate' showTime />
      </Datagrid>
    </List>
  );
};

export default DefaultEntitiesTrackingList;
