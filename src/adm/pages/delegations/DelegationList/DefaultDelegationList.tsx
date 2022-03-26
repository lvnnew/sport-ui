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
  useTranslate,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import DelegationFilter from './DelegationFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultDelegationList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List title={translate('catalogs.delegations.title')} exporter={false} filters={<DelegationFilter />} {...props}>
      <Datagrid rowClick='show'>
        <NumberField source='id' />
        <ReferenceField source='fromId' reference='managers' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ReferenceField source='toId' reference='managers' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <DateField source='expiresAt' />
        <BooleanField source='active' />
      </Datagrid>
    </List>
  );
};

export default DefaultDelegationList;
