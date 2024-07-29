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
import PlayerRankFilter from './PlayerRankFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'playerRanks.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultPlayerRankList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.playerRanks.title.plural'
      filters={<PlayerRankFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <TextField source='id' label='catalogs.playerRanks.fields.id' />
        <TextField source='title' label='catalogs.playerRanks.fields.title' />
        <NumberField source='rating' label='catalogs.playerRanks.fields.rating' />
      </Datagrid>
    </List>
  );
};

export default DefaultPlayerRankList;
