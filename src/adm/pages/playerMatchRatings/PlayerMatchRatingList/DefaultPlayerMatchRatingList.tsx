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
import PlayerMatchRatingFilter from './PlayerMatchRatingFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'playerMatchRatings.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultPlayerMatchRatingList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.playerMatchRatings.title.plural'
      filters={<PlayerMatchRatingFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.playerMatchRatings.fields.id' />
        <ReferenceField source='matchId' label='catalogs.playerMatchRatings.fields.matchId' reference='matches' link='show' />
        <ReferenceField source='playerId' label='catalogs.playerMatchRatings.fields.playerId' reference='players' link='show' />
        <NumberField source='rating' label='catalogs.playerMatchRatings.fields.rating' />
        <NumberField source='progressivePassAccuracy' label='catalogs.playerMatchRatings.fields.progressivePassAccuracy' />
        <NumberField source='playerRatingAverage' label='catalogs.playerMatchRatings.fields.playerRatingAverage' />
      </Datagrid>
    </List>
  );
};

export default DefaultPlayerMatchRatingList;
