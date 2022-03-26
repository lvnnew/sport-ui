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
  useTranslate,
} from 'react-admin';
import DateField from '../../../../../uiLib/DateField';

// DO NOT EDIT! THIS IS GENERATED FILE

const AdmRefreshTokensManagerIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <ReferenceManyField
      addLabel={false}
      reference='admRefreshTokens'
      target='managerId'
      pagination={<Pagination />}
    >
      <Datagrid>
        <NumberField source='id' label={translate('catalogs.admRefreshTokens.fields.id')} />
        <DateField source='create' label={translate('catalogs.admRefreshTokens.fields.create')} showTime />
        <ReferenceField source='managerId' label={translate('catalogs.admRefreshTokens.fields.managerId')} reference='managers' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <TextField source='token' label={translate('catalogs.admRefreshTokens.fields.token')} />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default AdmRefreshTokensManagerIdTab;
