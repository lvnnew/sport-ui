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
import ListWiget, {
  ListWigetProps,
} from '../../../widgets/ListWiget';
import {
  AggregateTracking,
  QueryAllAggregateTrackingsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListAggregateTrackingsWidgetProps extends
Omit<ListWigetProps<AggregateTracking>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllAggregateTrackingsArgs {
  children?: FC<AggregateTracking>,
}

export const ListAggregateTrackingsItem: FC<AggregateTracking> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/aggregateTrackings/${props.id}/show`}
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
              {`Last aggregates computed: ${props.lastAggregatesComputed}`}
            </div>
            <div>
              {`Last entity update: ${props.lastEntityUpdate}`}
            </div>
            <div>
              {`Aggregate version: ${props.aggregateVersion}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListAggregateTrackingsWidget: FC<ListAggregateTrackingsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListAggregateTrackingsItem,
  ...rest
}) => {
  return (
    <ListWiget<AggregateTracking>
      {...rest}
      source='aggregateTrackings'
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
          $filter: AggregateTrackingFilter,
        ) {
          allAggregateTrackings(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            entityTypeId
            entityId
            lastAggregatesComputed
            lastEntityUpdate
            aggregateVersion
          }
        }
      `}
      resultToValue={result => result?.allAggregateTrackings}
    >
      {(record) => children(record)}
    </ListWiget>
  );
};

export default ListAggregateTrackingsWidget;
