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
  PlayerMatchRating,
  QueryAllPlayerMatchRatingsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListPlayerMatchRatingsWidgetProps extends
Omit<ListWidgetProps<PlayerMatchRating>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllPlayerMatchRatingsArgs {
  children?: FC<PlayerMatchRating>,
}

export const ListPlayerMatchRatingsItem: FC<PlayerMatchRating> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/playerMatchRatings/${props.id}/show`}
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
              {`Player id: ${props.playerId}`}
            </div>
            <div>
              {`Rating: ${props.rating}`}
            </div>
            <div>
              {`Progressive pass accuracy: ${props.progressivePassAccuracy}`}
            </div>
            <div>
              {`Player rating average: ${props.playerRatingAverage}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListPlayerMatchRatingsWidget: FC<ListPlayerMatchRatingsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListPlayerMatchRatingsItem,
  ...rest
}) => {
  return (
    <ListWidget<PlayerMatchRating>
      {...rest}
      source='playerMatchRatings'
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
          $filter: PlayerMatchRatingFilter,
        ) {
          allPlayerMatchRatings(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            matchId
            playerId
            rating
            progressivePassAccuracy
            playerRatingAverage
          }
        }
      `}
      resultToValue={result => result?.allPlayerMatchRatings}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListPlayerMatchRatingsWidget;
