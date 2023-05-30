/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  NumberField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
} from 'react-admin';
import DateField from '../../../../../uiLib/DateField';

// DO NOT EDIT! THIS IS GENERATED FILE

const AdmRefreshTokensManagerIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='admRefreshTokens'
      target='managerId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.admRefreshTokens.fields.id' />
        <DateField source='create' label='catalogs.admRefreshTokens.fields.create' showTime />
        <ReferenceField source='managerId' label='catalogs.admRefreshTokens.fields.managerId' reference='managers' link='show' />
        <TextField source='token' label='catalogs.admRefreshTokens.fields.token' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default AdmRefreshTokensManagerIdTab;
