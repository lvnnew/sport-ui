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
import AggregateTrackingFilter from './AggregateTrackingFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'aggregateTrackings.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultAggregateTrackingList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='infoRegistries.aggregateTrackings.title.plural'
      filters={<AggregateTrackingFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='infoRegistries.aggregateTrackings.fields.id' />
        <ReferenceField source='entityTypeId' label='infoRegistries.aggregateTrackings.fields.entityTypeId' reference='entities' link='show' />
        <TextField source='entityId' label='infoRegistries.aggregateTrackings.fields.entityId' />
        <DateField source='lastAggregatesComputed' label='infoRegistries.aggregateTrackings.fields.lastAggregatesComputed' showTime />
        <DateField source='lastAggregatesScheduled' label='infoRegistries.aggregateTrackings.fields.lastAggregatesScheduled' showTime />
        <DateField source='lastEntityUpdate' label='infoRegistries.aggregateTrackings.fields.lastEntityUpdate' showTime />
        <NumberField source='aggregateVersion' label='infoRegistries.aggregateTrackings.fields.aggregateVersion' />
      </Datagrid>
    </List>
  );
};

export default DefaultAggregateTrackingList;
