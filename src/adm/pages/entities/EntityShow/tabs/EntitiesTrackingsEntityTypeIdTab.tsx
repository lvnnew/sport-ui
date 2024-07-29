/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  NumberField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
} from 'react-admin';
import DateField from '../../../../../uiLib/DateField';

// DO NOT EDIT! THIS IS GENERATED FILE

const EntitiesTrackingsEntityTypeIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='entitiesTrackings'
      target='entityTypeId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.entitiesTrackings.fields.id' />
        <ReferenceField source='entityTypeId' label='catalogs.entitiesTrackings.fields.entityTypeId' reference='entities' link='show' />
        <TextField source='entityId' label='catalogs.entitiesTrackings.fields.entityId' />
        <DateField source='lastEntityComputed' label='catalogs.entitiesTrackings.fields.lastEntityComputed' showTime />
        <DateField source='lastEntityScheduled' label='catalogs.entitiesTrackings.fields.lastEntityScheduled' showTime />
        <DateField source='lastEntityUpdate' label='catalogs.entitiesTrackings.fields.lastEntityUpdate' showTime />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default EntitiesTrackingsEntityTypeIdTab;
