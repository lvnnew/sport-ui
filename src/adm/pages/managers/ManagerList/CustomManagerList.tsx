/* eslint-disable max-len */
import React, {FC, Fragment} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  ReferenceField,
  BooleanField,
  BulkActionProps,
  BulkDeleteButton,
} from 'react-admin';
import CustomManagerAction from './CustomManagerActions';
import BulkDeactivateButton from './BulkDeactivateButton';
import ManagerFilter from './ManagerFilter';

const CustomBulkActionButtons = (props: BulkActionProps) => (
  <>
    <BulkDeactivateButton selectedIds={props.selectedIds} {...props} />
    <BulkDeleteButton {...props} />
  </>
);

const CustomManagerList: FC<ListProps> = (props: ListProps) => (
  <List
    title='Managers'
    exporter={false}
    filters={<ManagerFilter />}
    {...props}
    actions={<CustomManagerAction />}
  >
    <Datagrid
      rowClick='show'
      bulkActionButtons={<CustomBulkActionButtons />}
    >
      <NumberField source='id' label='catalogs.managers.fields.id' />
      <TextField source='title' label='catalogs.managers.fields.title' />
      <TextField source='lastName' label='catalogs.managers.fields.lastName' />
      <TextField source='firstName' label='catalogs.managers.fields.firstName' />
      <ReferenceField source='languageId' label='catalogs.managers.fields.languageId' reference='languages' link='show' />
      <TextField source='email' label='catalogs.managers.fields.email' />
      <TextField source='phone' label='catalogs.managers.fields.phone' />
      <TextField source='telegramLogin' label='catalogs.managers.fields.telegramLogin' />
      <ReferenceField source='unitId' label='catalogs.managers.fields.unitId' reference='units' link='show' />
      <BooleanField source='headOfUnit' label='catalogs.managers.fields.headOfUnit' />
      <BooleanField source='active' label='catalogs.managers.fields.active' />
      {/* <ImageViewField reference='files' source='photoId' label='catalogs.managers.fields.photoId' />
    <ReferenceField source='tenantId' label='catalogs.managers.fields.tenantId' reference='tenants' link='show' />
    <ReferenceField source='staffId' label='catalogs.managers.fields.staffId' reference='staffEntries' link='show' /> */}
    </Datagrid>
  </List>
);

export default CustomManagerList;
