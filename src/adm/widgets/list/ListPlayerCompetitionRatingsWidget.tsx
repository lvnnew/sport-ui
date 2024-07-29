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
  PlayerCompetitionRating,
  QueryAllPlayerCompetitionRatingsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListPlayerCompetitionRatingsWidgetProps extends
Omit<ListWidgetProps<PlayerCompetitionRating>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllPlayerCompetitionRatingsArgs {
  children?: FC<PlayerCompetitionRating>,
}

export const ListPlayerCompetitionRatingsItem: FC<PlayerCompetitionRating> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/playerCompetitionRatings/${props.id}/show`}
    >
      <ListItemText
        primary={
          <>
            <div>
              {`Id: ${props.id}`}
            </div>
            <div>
              {`Competition id: ${props.competitionId}`}
            </div>
            <div>
              {`Player id: ${props.playerId}`}
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

const ListPlayerCompetitionRatingsWidget: FC<ListPlayerCompetitionRatingsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListPlayerCompetitionRatingsItem,
  ...rest
}) => {
  return (
    <ListWidget<PlayerCompetitionRating>
      {...rest}
      source='playerCompetitionRatings'
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
          $filter: PlayerCompetitionRatingFilter,
        ) {
          allPlayerCompetitionRatings(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            competitionId
            playerId
            rating
          }
        }
      `}
      resultToValue={result => result?.allPlayerCompetitionRatings}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListPlayerCompetitionRatingsWidget;
