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
import ManagersToPermissionFilter from './ManagersToPermissionFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagersToPermissionList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List title={translate('catalogs.managersToPermissions')} exporter={false} filters={<ManagersToPermissionFilter />} {...props}>
      <Datagrid rowClick='show'>
        <NumberField source='id' />
        <ReferenceField source='managerId' reference='managers' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ReferenceField source='permissionId' reference='permissions' link='show'>
          <TextField source='title' />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

export default DefaultManagersToPermissionList;
