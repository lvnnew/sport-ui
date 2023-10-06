/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import ManagerLoginTypeFilter from './ManagerLoginTypeFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'managerLoginTypes.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultManagerLoginTypeList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.managerLoginTypes.title.plural'
      filters={<ManagerLoginTypeFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <TextField source='id' label='catalogs.managerLoginTypes.fields.id' />
        <TextField source='title' label='catalogs.managerLoginTypes.fields.title' />
      </Datagrid>
    </List>
  );
};

export default DefaultManagerLoginTypeList;
