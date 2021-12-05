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

const DelegationsToIdTab: FC<Omit<TabProps, 'children'>> = (props) => (
  <Tab {...props}>
    <ReferenceManyField
      addLabel={false}
      reference='delegations'
      target='toId'
      pagination={<Pagination />}
    >
      <Datagrid>
        <NumberField source='id' />
        <ReferenceField source='fromId' reference='managers' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ReferenceField source='toId' reference='managers' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <DateField source='expiresAt' />
        <BooleanField source='active' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>
);

export default DelegationsToIdTab;
