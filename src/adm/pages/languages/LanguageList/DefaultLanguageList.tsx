/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  TextField,
} from 'react-admin';
import LanguageFilter from './LanguageFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultLanguageList: FC<ListProps> = (props: ListProps) => (
  <List title={'Languages'} exporter={false} filters={<LanguageFilter />} {...props}>
    <Datagrid rowClick='show'>
      <TextField source='id' />
      <TextField source='title' />
    </Datagrid>
  </List>
);

export default DefaultLanguageList;
