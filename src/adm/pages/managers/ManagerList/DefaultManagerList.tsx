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
  BooleanField,
} from 'react-admin';
import ManagerFilter from './ManagerFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';
import ImageViewField from '../../../../uiLib/file/ImageViewField';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'managers.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultManagerList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.managers.title.plural'
      filters={<ManagerFilter />}
      actions={<ListActions />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label='catalogs.managers.fields.id' />
        <TextField source='title' label='catalogs.managers.fields.title' />
        <TextField source='lastName' label='catalogs.managers.fields.lastName' />
        <TextField source='firstName' label='catalogs.managers.fields.firstName' />
        <ReferenceField source='languageId' label='catalogs.managers.fields.languageId' reference='languages' link='show' />
        <TextField source='email' label='catalogs.managers.fields.email' />
        <TextField source='phone' label='catalogs.managers.fields.phone' />
        <ImageViewField reference='files' source='photoId' label='catalogs.managers.fields.photoId' />
        <TextField source='telegramLogin' label='catalogs.managers.fields.telegramLogin' />
        <ReferenceField source='unitId' label='catalogs.managers.fields.unitId' reference='units' link='show' />
        <BooleanField source='headOfUnit' label='catalogs.managers.fields.headOfUnit' />
        <BooleanField source='active' label='catalogs.managers.fields.active' />
        <ReferenceField source='tenantId' label='catalogs.managers.fields.tenantId' reference='tenants' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultManagerList;
