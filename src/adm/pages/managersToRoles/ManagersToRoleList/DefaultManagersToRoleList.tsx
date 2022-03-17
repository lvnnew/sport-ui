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
import ManagersToRoleFilter from './ManagersToRoleFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagersToRoleList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List title={translate('catalogs.managersToRoles')} exporter={false} filters={<ManagersToRoleFilter />} {...props}>
      <Datagrid rowClick='show'>
        <NumberField source='id' />
        <ReferenceField source='managerId' reference='managers' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ReferenceField source='roleId' reference='roles' link='show'>
          <TextField source='title' />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

export default DefaultManagersToRoleList;
