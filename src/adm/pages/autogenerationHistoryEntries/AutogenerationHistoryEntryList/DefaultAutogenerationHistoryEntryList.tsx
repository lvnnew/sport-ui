/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  ReferenceField,
  BooleanField,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import AutogenerationHistoryEntryFilter from './AutogenerationHistoryEntryFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAutogenerationHistoryEntryList: FC<ListProps> = (props: ListProps) => (
  <List title='Autogeneration history entries' exporter={false} filters={<AutogenerationHistoryEntryFilter />} {...props}>
    <Datagrid rowClick='show'>
      <NumberField source='id' />
      <DateField source='date' showTime />
      <TextField source='originalEntityType' />
      <TextField source='originalEntityId' />
      <ReferenceField source='autogenerationRuleId' reference='autogenerationRules' link='show'>
        <TextField source='title' />
      </ReferenceField>
      <DateField source='version' />
      <BooleanField source='errorOccurred' />
      <TextField source='error' />
    </Datagrid>
  </List>
);

export default DefaultAutogenerationHistoryEntryList;
