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
  useTranslate,
} from 'react-admin';
import DateField from '../../../../../uiLib/DateField';

// DO NOT EDIT! THIS IS GENERATED FILE

const AggregateTrackingsEntityTypeIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='aggregateTrackings'
      target='entityTypeId'
      pagination={<Pagination />}
    >
      <Datagrid>
        <NumberField source='id' label={translate('infoRegistries.aggregateTrackings.fields.id')} />
        <ReferenceField source='entityTypeId' label={translate('infoRegistries.aggregateTrackings.fields.entityTypeId')} reference='entities' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <TextField source='entityId' label={translate('infoRegistries.aggregateTrackings.fields.entityId')} />
        <DateField source='lastAggregatesComputed' label={translate('infoRegistries.aggregateTrackings.fields.lastAggregatesComputed')} showTime />
        <DateField source='lastEntityUpdate' label={translate('infoRegistries.aggregateTrackings.fields.lastEntityUpdate')} showTime />
        <NumberField source='aggregateVersion' label={translate('infoRegistries.aggregateTrackings.fields.aggregateVersion')} />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default AggregateTrackingsEntityTypeIdTab;
