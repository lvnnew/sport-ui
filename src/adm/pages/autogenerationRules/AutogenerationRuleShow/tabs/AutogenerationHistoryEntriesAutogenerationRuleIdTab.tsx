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
  useTranslate,
} from 'react-admin';
import DateField from '../../../../../uiLib/DateField';

// DO NOT EDIT! THIS IS GENERATED FILE

const AutogenerationHistoryEntriesAutogenerationRuleIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='autogenerationHistoryEntries'
      target='autogenerationRuleId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.autogenerationHistoryEntries.fields.id' />
        <DateField source='date' label='catalogs.autogenerationHistoryEntries.fields.date' showTime />
        <TextField source='originalEntityType' label='catalogs.autogenerationHistoryEntries.fields.originalEntityType' />
        <TextField source='originalEntityId' label='catalogs.autogenerationHistoryEntries.fields.originalEntityId' />
        <ReferenceField source='autogenerationRuleId' label='catalogs.autogenerationHistoryEntries.fields.autogenerationRuleId' reference='autogenerationRules' link='show' />
        <DateField source='version' label='catalogs.autogenerationHistoryEntries.fields.version' />
        <BooleanField source='errorOccurred' label='catalogs.autogenerationHistoryEntries.fields.errorOccurred' />
        <TextField source='error' label='catalogs.autogenerationHistoryEntries.fields.error' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default AutogenerationHistoryEntriesAutogenerationRuleIdTab;
