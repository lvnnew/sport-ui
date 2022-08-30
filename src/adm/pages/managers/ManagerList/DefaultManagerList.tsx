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
  useTranslate,
} from 'react-admin';
import ManagerFilter from './ManagerFilter';
import {hasPermission} from '../../../../utils/permissions';
import ImageViewField from '../../../../uiLib/file/ImageViewField';

// DO NOT EDIT! THIS IS GENERATED FILE

const CustomBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'managers.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultManagerList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List
      title={translate('catalogs.managers.title')}
      exporter={false}
      filters={<ManagerFilter />}
      bulkActionButtons={<CustomBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label={translate('catalogs.managers.fields.id')} />
        <TextField source='title' label={translate('catalogs.managers.fields.title')} />
        <TextField source='lastName' label={translate('catalogs.managers.fields.lastName')} />
        <TextField source='firstName' label={translate('catalogs.managers.fields.firstName')} />
        <ReferenceField source='languageId' label={translate('catalogs.managers.fields.languageId')} reference='languages' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <TextField source='email' label={translate('catalogs.managers.fields.email')} />
        <TextField source='phone' label={translate('catalogs.managers.fields.phone')} />
        <ImageViewField reference='files' source='photoId' label={translate('catalogs.managers.fields.photoId')} />
        <TextField source='telegramLogin' label={translate('catalogs.managers.fields.telegramLogin')} />
        <ReferenceField source='unitId' label={translate('catalogs.managers.fields.unitId')} reference='units' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <BooleanField source='headOfUnit' label={translate('catalogs.managers.fields.headOfUnit')} />
        <BooleanField source='active' label={translate('catalogs.managers.fields.active')} />
        <ReferenceField source='tenantId' label={translate('catalogs.managers.fields.tenantId')} reference='tenants' link='show'>
          <TextField source='title' />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

export default DefaultManagerList;
