/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  ReferenceField,
} from 'react-admin';
import UnitFilter from './UnitFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultUnitList: FC<ListProps> = (props: ListProps) => (
  <List title='Units' exporter={false} filters={<UnitFilter />} {...props}>
    <Datagrid rowClick='show'>
      <NumberField source='id' />
      <TextField source='title' />
      <ReferenceField source='parentId' reference='units' link='show'>
        <TextField source='title' />
      </ReferenceField>
    </Datagrid>
  </List>
);

export default DefaultUnitList;
