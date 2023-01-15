/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  NumberField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
} from 'react-admin';
import DateField from '../../../../../uiLib/DateField';

// DO NOT EDIT! THIS IS GENERATED FILE

const AggregateTrackingsEntityTypeIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='aggregateTrackings'
      target='entityTypeId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='infoRegistries.aggregateTrackings.fields.id' />
        <ReferenceField source='entityTypeId' label='infoRegistries.aggregateTrackings.fields.entityTypeId' reference='entities' link='show' />
        <TextField source='entityId' label='infoRegistries.aggregateTrackings.fields.entityId' />
        <DateField source='lastAggregatesComputed' label='infoRegistries.aggregateTrackings.fields.lastAggregatesComputed' showTime />
        <DateField source='lastAggregatesScheduled' label='infoRegistries.aggregateTrackings.fields.lastAggregatesScheduled' showTime />
        <DateField source='lastEntityUpdate' label='infoRegistries.aggregateTrackings.fields.lastEntityUpdate' showTime />
        <NumberField source='aggregateVersion' label='infoRegistries.aggregateTrackings.fields.aggregateVersion' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default AggregateTrackingsEntityTypeIdTab;
