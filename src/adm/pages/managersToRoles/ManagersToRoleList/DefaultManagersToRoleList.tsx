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
import ManagersToRoleFilter from './ManagersToRoleFilter';
import {hasPermission} from '../../../../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'managersToRoles.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultManagersToRoleList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List
      title={translate('catalogs.managersToRoles.title')}
      exporter={false}
      filters={<ManagersToRoleFilter />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label={translate('catalogs.managersToRoles.fields.id')} />
        <ReferenceField source='managerId' label={translate('catalogs.managersToRoles.fields.managerId')} reference='managers' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ReferenceField source='roleId' label={translate('catalogs.managersToRoles.fields.roleId')} reference='roles' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <DateField source='expiresAt' label={translate('catalogs.managersToRoles.fields.expiresAt')} />
      </Datagrid>
    </List>
  );
};

export default DefaultManagersToRoleList;
