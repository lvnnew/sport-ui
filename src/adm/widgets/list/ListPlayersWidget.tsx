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
  Player,
  QueryAllPlayersArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListPlayersWidgetProps extends
Omit<ListWidgetProps<Player>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllPlayersArgs {
  children?: FC<Player>,
}

export const ListPlayersItem: FC<Player> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/players/${props.id}/show`}
    >
      <ListItemText
        primary={
          <>
            <div>
              {`Id: ${props.id}`}
            </div>
            <div>
              {`Firstname: ${props.firstname}`}
            </div>
            <div>
              {`Lastname: ${props.lastname}`}
            </div>
            <div>
              {`Patronymic: ${props.patronymic}`}
            </div>
            <div>
              {`Title: ${props.title}`}
            </div>
            <div>
              {`Player name: ${props.playerName}`}
            </div>
            <div>
              {`Number: ${props.number}`}
            </div>
            <div>
              {`Date of birth: ${props.dateOfBirth}`}
            </div>
            <div>
              {`Team id: ${props.teamId}`}
            </div>
            <div>
              {`Created by manager id: ${props.createdByManagerId}`}
            </div>
            <div>
              {`Last changed by manager id: ${props.lastChangedByManagerId}`}
            </div>
            <div>
              {`Parent id: ${props.parentId}`}
            </div>
            <div>
              {`Link to profile: ${props.linkToProfile}`}
            </div>
            <div>
              {`Player rating: ${props.playerRating}`}
            </div>
            <div>
              {`Player rank id: ${props.playerRankId}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListPlayersWidget: FC<ListPlayersWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListPlayersItem,
  ...rest
}) => {
  return (
    <ListWidget<Player>
      {...rest}
      source='players'
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
          $filter: PlayerFilter,
        ) {
          allPlayers(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            firstname
            lastname
            patronymic
            title
            playerName
            number
            dateOfBirth
            age
            teamId
            createdByManagerId
            lastChangedByManagerId
            parentId
            linkToProfile
            playerRating
            photoId
            playerRatingAverage
            commonPlayerRatingGoalkeeper
            commonPlayerRatingAttack
            commonPlayerRatingMidfielder
            commonPlayerRatingDefender
            playedMatches
            averagePlayerRatingGoalkeeper
            averagePlayerRatingAttack
            averagePlayerRatingMidfielder
            averagePlayerRatingDefender
            playerAggregatedRoleId
            playerTag
            progressivePassAccuracy
            playerRankId
          }
        }
      `}
      resultToValue={result => result?.allPlayers}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListPlayersWidget;
