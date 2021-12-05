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

const AutogenerationHistoryEntriesAutogenerationRuleIdTab: FC<Omit<TabProps, 'children'>> = (props) => (
  <Tab {...props}>
    <ReferenceManyField
      addLabel={false}
      reference='autogenerationHistoryEntries'
      target='autogenerationRuleId'
      pagination={<Pagination />}
    >
      <Datagrid>
        <NumberField source='id' />
        <DateField source='date' />
        <TextField source='originalEntityType' />
        <TextField source='originalEntityId' />
        <ReferenceField source='autogenerationRuleId' reference='autogenerationRules' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <DateField source='version' />
        <BooleanField source='errorOccurred' />
        <TextField source='error' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>
);

export default AutogenerationHistoryEntriesAutogenerationRuleIdTab;
