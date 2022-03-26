/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  useTranslate,
} from 'react-admin';
import TenantFilter from './TenantFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultTenantList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List title={translate('catalogs.tenants.title')} exporter={false} filters={<TenantFilter />} {...props}>
      <Datagrid rowClick='show'>
        <NumberField source='id' />
        <TextField source='title' />
      </Datagrid>
    </List>
  );
};

export default DefaultTenantList;
