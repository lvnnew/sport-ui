/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
  TextField,
  NumberField,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import StatFilter from './StatFilter';
import {hasPermission} from '../../../../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'stats.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultStatList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.stats.title.plural'
      exporter={false}
      filters={<StatFilter />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <TextField source='id' label='catalogs.stats.fields.id' />
        <DateField source='updated' label='catalogs.stats.fields.updated' showTime />
        <NumberField source='helloCount' label='catalogs.stats.fields.helloCount' />
      </Datagrid>
    </List>
  );
};

export default DefaultStatList;
