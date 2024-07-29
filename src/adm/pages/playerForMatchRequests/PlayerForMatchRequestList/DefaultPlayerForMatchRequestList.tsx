/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  ReferenceField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import PlayerForMatchRequestFilter from './PlayerForMatchRequestFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'playerForMatchRequests.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultPlayerForMatchRequestList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.playerForMatchRequests.title.plural'
      filters={<PlayerForMatchRequestFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.playerForMatchRequests.fields.id' />
        <ReferenceField source='matchRequestId' label='catalogs.playerForMatchRequests.fields.matchRequestId' reference='matchRequests' link='show' />
        <ReferenceField source='playerId' label='catalogs.playerForMatchRequests.fields.playerId' reference='players' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultPlayerForMatchRequestList;
