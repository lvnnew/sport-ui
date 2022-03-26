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
    <List title={translate('catalogs.managersToPermissions.title')} exporter={false} filters={<ManagersToPermissionFilter />} {...props}>
      <Datagrid rowClick='show'>
        <NumberField source='id' label={translate('catalogs.managersToPermissions.fields.id')} />
        <ReferenceField source='managerId' label={translate('catalogs.managersToPermissions.fields.managerId')} reference='managers' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ReferenceField source='permissionId' label={translate('catalogs.managersToPermissions.fields.permissionId')} reference='permissions' link='show'>
          <TextField source='title' />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

export default DefaultManagersToPermissionList;
