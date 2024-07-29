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
  TeamForPlayer,
  QueryAllTeamForPlayersArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListTeamForPlayersWidgetProps extends
Omit<ListWidgetProps<TeamForPlayer>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllTeamForPlayersArgs {
  children?: FC<TeamForPlayer>,
}

export const ListTeamForPlayersItem: FC<TeamForPlayer> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/teamForPlayers/${props.id}/show`}
    >
      <ListItemText
        primary={
          <>
            <div>
              {`Id: ${props.id}`}
            </div>
            <div>
              {`Player id: ${props.playerId}`}
            </div>
            <div>
              {`Team id: ${props.teamId}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListTeamForPlayersWidget: FC<ListTeamForPlayersWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListTeamForPlayersItem,
  ...rest
}) => {
  return (
    <ListWidget<TeamForPlayer>
      {...rest}
      source='teamForPlayers'
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
          $filter: TeamForPlayerFilter,
        ) {
          allTeamForPlayers(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            playerId
            teamId
          }
        }
      `}
      resultToValue={result => result?.allTeamForPlayers}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListTeamForPlayersWidget;
