/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  ReferenceField,
  useTranslate,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import AggregateTrackingFilter from './AggregateTrackingFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAggregateTrackingList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List title={translate('infoRegistries.aggregateTrackings.title')} exporter={false} filters={<AggregateTrackingFilter />} {...props}>
      <Datagrid rowClick='show'>
        <NumberField source='id' label={translate('infoRegistries.aggregateTrackings.fields.id')} />
        <ReferenceField source='entityTypeId' label={translate('infoRegistries.aggregateTrackings.fields.entityTypeId')} reference='entities' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <TextField source='entityId' label={translate('infoRegistries.aggregateTrackings.fields.entityId')} />
        <DateField source='lastAggregatesComputed' label={translate('infoRegistries.aggregateTrackings.fields.lastAggregatesComputed')} showTime />
        <DateField source='lastEntityUpdate' label={translate('infoRegistries.aggregateTrackings.fields.lastEntityUpdate')} showTime />
        <NumberField source='aggregateVersion' label={translate('infoRegistries.aggregateTrackings.fields.aggregateVersion')} />
      </Datagrid>
    </List>
  );
};

export default DefaultAggregateTrackingList;
