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

// DO NOT EDIT! THIS IS GENERATED FILE

const ManagersUnitIdTab: FC<Omit<TabProps, 'children'>> = (props) => (
  <Tab {...props}>
    <ReferenceManyField
      addLabel={false}
      reference='managers'
      target='unitId'
      pagination={<Pagination />}
    >
      <Datagrid>
        <NumberField source='id' />
        <TextField source='title' />
        <TextField source='lastName' />
        <TextField source='firstName' />
        <ReferenceField source='languageId' reference='languages' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <TextField source='email' />
        <TextField source='telegramLogin' />
        <ReferenceField source='unitId' reference='units' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <BooleanField source='headOfUnit' />
        <BooleanField source='active' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>
);

export default ManagersUnitIdTab;
