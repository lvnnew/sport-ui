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
import MatchRequestFilter from './MatchRequestFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'matchRequests.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultMatchRequestList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.matchRequests.title.plural'
      filters={<MatchRequestFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.matchRequests.fields.id' />
        <ReferenceField source='matchId' label='catalogs.matchRequests.fields.matchId' reference='matches' link='show' />
        <ReferenceField source='teamForCompetitionId' label='catalogs.matchRequests.fields.teamForCompetitionId' reference='teamForCompetitions' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultMatchRequestList;
