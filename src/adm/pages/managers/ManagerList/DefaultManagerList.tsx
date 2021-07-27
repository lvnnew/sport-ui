/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  ReferenceField
} from 'react-admin';
import ManagerFilter from './ManagerFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagerList: FC<ListProps> = (props: ListProps) => (
  <List title={'Managers'} exporter={false} filters={<ManagerFilter />} {...props}>
    <Datagrid rowClick="show">
      <NumberField source="id" />
      <TextField source="title" />
      <TextField source="lastName" />
      <TextField source="firstName" />
      <ReferenceField source="languageId" reference="languages" link="show">
      <TextField source="title" />
    </ReferenceField>
      <TextField source="email" />
    </Datagrid>
  </List>
);

export default DefaultManagerList;
