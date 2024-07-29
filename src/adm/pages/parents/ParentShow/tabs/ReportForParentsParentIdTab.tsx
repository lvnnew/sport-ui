/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  NumberField,
  TextField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
} from 'react-admin';
import DateField from '../../../../../uiLib/DateField';

// DO NOT EDIT! THIS IS GENERATED FILE

const ReportForParentsParentIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='reportForParents'
      target='parentId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.reportForParents.fields.id' />
        <TextField source='title' label='catalogs.reportForParents.fields.title' />
        <ReferenceField source='playerId' label='catalogs.reportForParents.fields.playerId' reference='players' link='show' />
        <ReferenceField source='matchId' label='catalogs.reportForParents.fields.matchId' reference='matches' link='show' />
        <ReferenceField source='parentId' label='catalogs.reportForParents.fields.parentId' reference='parents' link='show' />
        <DateField source='lastUpdated' label='catalogs.reportForParents.fields.lastUpdated' />
        <BooleanField source='paid' label='catalogs.reportForParents.fields.paid' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default ReportForParentsParentIdTab;
