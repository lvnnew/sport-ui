/* eslint-disable max-len */
import React, {
  FC,
} from 'react';
import {
  gql,
} from '@apollo/client';
import {
  Link,
} from 'react-router-dom';
import {ListItem, ListItemText} from '@mui/material';
import ListWidget, {
  ListWidgetProps,
} from '../../../widgets/ListWidget';
import {
  EntitiesTracking,
  QueryAllEntitiesTrackingsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListEntitiesTrackingsWidgetProps extends
Omit<ListWidgetProps<EntitiesTracking>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllEntitiesTrackingsArgs {
  children?: FC<EntitiesTracking>,
}

export const ListEntitiesTrackingsItem: FC<EntitiesTracking> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/entitiesTrackings/${props.id}/show`}
    >
      <ListItemText
        primary={
          <>
            <div>
              {`Id: ${props.id}`}
            </div>
            <div>
              {`Entity type id: ${props.entityTypeId}`}
            </div>
            <div>
              {`Entity id: ${props.entityId}`}
            </div>
            <div>
              {`Last entity computed: ${props.lastEntityComputed}`}
            </div>
            <div>
              {`Last entity scheduled: ${props.lastEntityScheduled}`}
            </div>
            <div>
              {`Last entity update: ${props.lastEntityUpdate}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListEntitiesTrackingsWidget: FC<ListEntitiesTrackingsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListEntitiesTrackingsItem,
  ...rest
}) => {
  return (
    <ListWidget<EntitiesTracking>
      {...rest}
      source='entitiesTrackings'
      options={{
        variables: {
          page,
          perPage,
          sortField,
          sortOrder,
          filter,
        },
      }}
      request={gql`
        query (
          $page: Int,
          $perPage: Int,
          $sortField: String,
          $sortOrder: String,
          $filter: EntitiesTrackingFilter,
        ) {
          allEntitiesTrackings(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            entityTypeId
            entityId
            lastEntityComputed
            lastEntityScheduled
            lastEntityUpdate
          }
        }
      `}
      resultToValue={result => result?.allEntitiesTrackings}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListEntitiesTrackingsWidget;
