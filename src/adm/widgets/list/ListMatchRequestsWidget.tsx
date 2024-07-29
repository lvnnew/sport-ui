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
  MatchRequest,
  QueryAllMatchRequestsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListMatchRequestsWidgetProps extends
Omit<ListWidgetProps<MatchRequest>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllMatchRequestsArgs {
  children?: FC<MatchRequest>,
}

export const ListMatchRequestsItem: FC<MatchRequest> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/matchRequests/${props.id}/show`}
    >
      <ListItemText
        primary={
          <>
            <div>
              {`Id: ${props.id}`}
            </div>
            <div>
              {`Match id: ${props.matchId}`}
            </div>
            <div>
              {`Team for competition id: ${props.teamForCompetitionId}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListMatchRequestsWidget: FC<ListMatchRequestsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListMatchRequestsItem,
  ...rest
}) => {
  return (
    <ListWidget<MatchRequest>
      {...rest}
      source='matchRequests'
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
          $filter: MatchRequestFilter,
        ) {
          allMatchRequests(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            matchId
            teamForCompetitionId
          }
        }
      `}
      resultToValue={result => result?.allMatchRequests}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListMatchRequestsWidget;
