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
} from 'react-admin';
import UnitFilter from './UnitFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'units.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultUnitList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.units.title.plural'
      filters={<UnitFilter />}
      actions={<ListActions />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label='catalogs.units.fields.id' />
        <TextField source='title' label='catalogs.units.fields.title' />
        <ReferenceField source='parentId' label='catalogs.units.fields.parentId' reference='units' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultUnitList;
