/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  NumberField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import PeriodTypeFilter from './PeriodTypeFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'periodTypes.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultPeriodTypeList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.periodTypes.title.plural'
      filters={<PeriodTypeFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <TextField source='id' label='catalogs.periodTypes.fields.id' />
        <TextField source='title' label='catalogs.periodTypes.fields.title' />
        <NumberField source='order' label='catalogs.periodTypes.fields.order' />
      </Datagrid>
    </List>
  );
};

export default DefaultPeriodTypeList;
