/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  NumberField,
  ReferenceField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const MatchPeriodMarkupsPeriodTypeIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='matchPeriodMarkups'
      target='periodTypeId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.matchPeriodMarkups.fields.id' />
        <NumberField source='timestamp' label='catalogs.matchPeriodMarkups.fields.timestamp' />
        <ReferenceField source='periodTypeId' label='catalogs.matchPeriodMarkups.fields.periodTypeId' reference='periodTypes' link='show' />
        <ReferenceField source='matchVideoId' label='catalogs.matchPeriodMarkups.fields.matchVideoId' reference='matchVideos' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default MatchPeriodMarkupsPeriodTypeIdTab;
