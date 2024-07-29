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
  PlayerForTeamMatchList,
  QueryAllPlayerForTeamMatchListsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListPlayerForTeamMatchListsWidgetProps extends
Omit<ListWidgetProps<PlayerForTeamMatchList>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllPlayerForTeamMatchListsArgs {
  children?: FC<PlayerForTeamMatchList>,
}

export const ListPlayerForTeamMatchListsItem: FC<PlayerForTeamMatchList> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/playerForTeamMatchLists/${props.id}/show`}
    >
      <ListItemText
        primary={
          <>
            <div>
              {`Id: ${props.id}`}
            </div>
            <div>
              {`Team match list id: ${props.teamMatchListId}`}
            </div>
            <div>
              {`Player id: ${props.playerId}`}
            </div>
            <div>
              {`Starting position: ${props.startingPosition}`}
            </div>
            <div>
              {`Player role id: ${props.playerRoleId}`}
            </div>
            <div>
              {`Player on match number: ${props.playerOnMatchNumber}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListPlayerForTeamMatchListsWidget: FC<ListPlayerForTeamMatchListsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListPlayerForTeamMatchListsItem,
  ...rest
}) => {
  return (
    <ListWidget<PlayerForTeamMatchList>
      {...rest}
      source='playerForTeamMatchLists'
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
          $filter: PlayerForTeamMatchListFilter,
        ) {
          allPlayerForTeamMatchLists(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            teamMatchListId
            playerId
            startingPosition
            onField
            playerRoleId
            playerOnMatchNumber
          }
        }
      `}
      resultToValue={result => result?.allPlayerForTeamMatchLists}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListPlayerForTeamMatchListsWidget;
