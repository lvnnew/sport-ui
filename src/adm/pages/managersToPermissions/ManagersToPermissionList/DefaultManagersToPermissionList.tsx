/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
  NumberField,
  TextField,
  ReferenceField,
  useTranslate,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import ManagersToPermissionFilter from './ManagersToPermissionFilter';
import {hasPermission} from '../../../../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'managersToPermissions.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultManagersToPermissionList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List
      title={translate('catalogs.managersToPermissions.title.plural')}
      exporter={false}
      filters={<ManagersToPermissionFilter />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label={translate('catalogs.managersToPermissions.fields.id')} />
        <ReferenceField source='managerId' label={translate('catalogs.managersToPermissions.fields.managerId')} reference='managers' link='show' />
        <ReferenceField source='permissionId' label={translate('catalogs.managersToPermissions.fields.permissionId')} reference='permissions' link='show' />
        <DateField source='expiresAt' label={translate('catalogs.managersToPermissions.fields.expiresAt')} />
      </Datagrid>
    </List>
  );
};

export default DefaultManagersToPermissionList;
