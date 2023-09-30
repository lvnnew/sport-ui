/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  ReferenceField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
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
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.units.fields.id' />
        <TextField source='title' label='catalogs.units.fields.title' />
        <ReferenceField source='parentId' label='catalogs.units.fields.parentId' reference='units' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultUnitList;
