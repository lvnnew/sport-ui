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
import UserFilter from './UserFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultUserList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List title={translate('catalogs.users.title')} exporter={false} filters={<UserFilter />} {...props}>
      <Datagrid rowClick='show'>
        <NumberField source='id' />
        <TextField source='title' />
        <TextField source='lastname' />
        <TextField source='firstname' />
        <TextField source='email' />
        <ReferenceField source='tenantId' reference='tenants' link='show'>
          <TextField source='title' />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

export default DefaultUserList;
