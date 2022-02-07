/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  NumberField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
} from 'react-admin';
import DateField from '../../../../../uiLib/DateField';

// DO NOT EDIT! THIS IS GENERATED FILE

const AdmRefreshTokensManagerIdTab: FC<Omit<TabProps, 'children'>> = (props) => (
  <Tab {...props}>
    <ReferenceManyField
      addLabel={false}
      reference='admRefreshTokens'
      target='managerId'
      pagination={<Pagination />}
    >
      <Datagrid>
        <NumberField source='id' />
        <DateField source='create' showTime />
        <ReferenceField source='managerId' reference='managers' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <TextField source='token' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>
);

export default AdmRefreshTokensManagerIdTab;
