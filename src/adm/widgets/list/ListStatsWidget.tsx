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
  Stat,
  QueryAllStatsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListStatsWidgetProps extends
Omit<ListWigetProps<Stat>, 'request' | 'resultToValue'| 'children'>,
QueryAllStatsArgs {
  children?: FC<Stat>,
}

export const ListStatsItem: FC<Stat> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/stats/${props.id}/show`}
    >
      <ListItemText
        primary={
          <>
            <div>
              {`Id: ${props.id}`}
            </div>
            <div>
              {`Updated: ${props.updated}`}
            </div>
            <div>
              {`Hello count: ${props.helloCount}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListStatsWidget: FC<ListStatsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListStatsItem,
  ...rest
}) => {
  return (
    <ListWiget<Stat>
      {...rest}
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
          $filter: StatFilter,
        ) {
          allStats(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            updated
            helloCount
          }
        }
      `}
      resultToValue={result => result?.allStats}
    >
      {(record) => children(record)}
    </ListWiget>
  );
};

export default ListStatsWidget;
