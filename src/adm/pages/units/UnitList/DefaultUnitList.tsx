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
import UnitFilter from './UnitFilter';
import {hasPermission} from '../../../../utils/permissions';

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
  const translate = useTranslate();

  return (
    <List
      title={translate('catalogs.units.title.plural')}
      exporter={false}
      filters={<UnitFilter />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label={translate('catalogs.units.fields.id')} />
        <TextField source='title' label={translate('catalogs.units.fields.title')} />
        <ReferenceField source='parentId' label={translate('catalogs.units.fields.parentId')} reference='units' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultUnitList;
