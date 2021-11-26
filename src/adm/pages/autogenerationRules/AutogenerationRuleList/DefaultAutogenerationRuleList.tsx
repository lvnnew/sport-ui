/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from 'react-admin';
import AutogenerationRuleFilter from './AutogenerationRuleFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAutogenerationRuleList: FC<ListProps> = (props: ListProps) => (
  <List title='Autogeneration rules' exporter={false} filters={<AutogenerationRuleFilter />} {...props}>
    <Datagrid rowClick='show'>
      <TextField source='id' />
      <TextField source='title' />
      <DateField source='version' />
      <TextField source='originalEntityType' />
      <TextField source='generatingEntityType' />
      <TextField source='originalEntityFilter' />
      <TextField source='generatingEntityConstructionRules' />
      <BooleanField source='ignoreVersionOnHistory' />
    </Datagrid>
  </List>
);

export default DefaultAutogenerationRuleList;
