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
import PlayerCompetitionRatingFilter from './PlayerCompetitionRatingFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'playerCompetitionRatings.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultPlayerCompetitionRatingList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.playerCompetitionRatings.title.plural'
      filters={<PlayerCompetitionRatingFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.playerCompetitionRatings.fields.id' />
        <ReferenceField source='competitionId' label='catalogs.playerCompetitionRatings.fields.competitionId' reference='competitions' link='show' />
        <ReferenceField source='playerId' label='catalogs.playerCompetitionRatings.fields.playerId' reference='players' link='show' />
        <NumberField source='rating' label='catalogs.playerCompetitionRatings.fields.rating' />
      </Datagrid>
    </List>
  );
};

export default DefaultPlayerCompetitionRatingList;
