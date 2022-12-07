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
  BooleanField,
  ReferenceField,
  useTranslate,
} from 'react-admin';
import ManagerLoginFilter from './ManagerLoginFilter';
import {hasPermission} from '../../../../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'managerLogins.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultManagerLoginList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List
      title={translate('catalogs.managerLogins.title')}
      exporter={false}
      filters={<ManagerLoginFilter />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label={translate('catalogs.managerLogins.fields.id')} />
        <TextField source='login' label={translate('catalogs.managerLogins.fields.login')} />
        <TextField source='passwordHash' label={translate('catalogs.managerLogins.fields.passwordHash')} />
        <BooleanField source='emailVerified' label={translate('catalogs.managerLogins.fields.emailVerified')} />
        <BooleanField source='initialPasswordChanged' label={translate('catalogs.managerLogins.fields.initialPasswordChanged')} />
        <BooleanField source='locked' label={translate('catalogs.managerLogins.fields.locked')} />
        <ReferenceField source='managerId' label={translate('catalogs.managerLogins.fields.managerId')} reference='managers' link='show'>
          <TextField source='title' />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

export default DefaultManagerLoginList;
