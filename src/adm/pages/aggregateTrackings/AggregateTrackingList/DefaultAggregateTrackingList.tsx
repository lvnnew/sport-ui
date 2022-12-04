/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
  NumberField,
  TextField,
  ReferenceField,
  useTranslate,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import AggregateTrackingFilter from './AggregateTrackingFilter';
import {hasPermission} from '../../../../utils/permissions';

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
  const translate = useTranslate();

  return (
    <List
      title={translate('infoRegistries.aggregateTrackings.title')}
      exporter={false}
      filters={<AggregateTrackingFilter />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label={translate('infoRegistries.aggregateTrackings.fields.id')} />
        <ReferenceField source='entityTypeId' label={translate('infoRegistries.aggregateTrackings.fields.entityTypeId')} reference='entities' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <TextField source='entityId' label={translate('infoRegistries.aggregateTrackings.fields.entityId')} />
        <DateField source='lastAggregatesComputed' label={translate('infoRegistries.aggregateTrackings.fields.lastAggregatesComputed')} showTime />
        <DateField source='lastAggregatesScheduled' label={translate('infoRegistries.aggregateTrackings.fields.lastAggregatesScheduled')} showTime />
        <DateField source='lastEntityUpdate' label={translate('infoRegistries.aggregateTrackings.fields.lastEntityUpdate')} showTime />
        <NumberField source='aggregateVersion' label={translate('infoRegistries.aggregateTrackings.fields.aggregateVersion')} />
      </Datagrid>
    </List>
  );
};

export default DefaultAggregateTrackingList;
