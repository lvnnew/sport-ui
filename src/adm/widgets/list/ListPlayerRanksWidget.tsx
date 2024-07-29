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
  PlayerRank,
  QueryAllPlayerRanksArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListPlayerRanksWidgetProps extends
Omit<ListWidgetProps<PlayerRank>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllPlayerRanksArgs {
  children?: FC<PlayerRank>,
}

export const ListPlayerRanksItem: FC<PlayerRank> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/playerRanks/${props.id}/show`}
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
            <div>
              {`Rating: ${props.rating}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListPlayerRanksWidget: FC<ListPlayerRanksWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListPlayerRanksItem,
  ...rest
}) => {
  return (
    <ListWidget<PlayerRank>
      {...rest}
      source='playerRanks'
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
          $filter: PlayerRankFilter,
        ) {
          allPlayerRanks(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
            rating
            fileId
          }
        }
      `}
      resultToValue={result => result?.allPlayerRanks}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListPlayerRanksWidget;
