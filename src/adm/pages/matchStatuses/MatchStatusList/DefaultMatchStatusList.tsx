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
import MatchStatusFilter from './MatchStatusFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'matchStatuses.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultMatchStatusList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.matchStatuses.title.plural'
      filters={<MatchStatusFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <TextField source='id' label='catalogs.matchStatuses.fields.id' />
        <TextField source='title' label='catalogs.matchStatuses.fields.title' />
      </Datagrid>
    </List>
  );
};

export default DefaultMatchStatusList;
