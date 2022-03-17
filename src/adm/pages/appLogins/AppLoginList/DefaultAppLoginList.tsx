/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  ReferenceField,
  useTranslate,
} from 'react-admin';
import AppLoginFilter from './AppLoginFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAppLoginList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List title={translate('catalogs.appLogins')} exporter={false} filters={<AppLoginFilter />} {...props}>
      <Datagrid rowClick='show'>
        <NumberField source='id' />
        <TextField source='login' />
        <TextField source='passwordHash' />
        <ReferenceField source='userId' reference='users' link='show'>
          <TextField source='title' />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

export default DefaultAppLoginList;
