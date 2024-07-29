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
  MatchStatus,
  QueryAllMatchStatusesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListMatchStatusesWidgetProps extends
Omit<ListWidgetProps<MatchStatus>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllMatchStatusesArgs {
  children?: FC<MatchStatus>,
}

export const ListMatchStatusesItem: FC<MatchStatus> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/matchStatuses/${props.id}/show`}
    >
      <ListItemText
        primary={
          <>
            <div>
              {`Id: ${props.id}`}
            </div>
            <div>
              {`Title: ${props.title}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListMatchStatusesWidget: FC<ListMatchStatusesWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListMatchStatusesItem,
  ...rest
}) => {
  return (
    <ListWidget<MatchStatus>
      {...rest}
      source='matchStatuses'
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
          $filter: MatchStatusFilter,
        ) {
          allMatchStatuses(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
          }
        }
      `}
      resultToValue={result => result?.allMatchStatuses}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListMatchStatusesWidget;
