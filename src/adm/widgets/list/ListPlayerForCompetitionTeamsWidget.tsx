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
  PlayerForCompetitionTeam,
  QueryAllPlayerForCompetitionTeamsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListPlayerForCompetitionTeamsWidgetProps extends
Omit<ListWidgetProps<PlayerForCompetitionTeam>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllPlayerForCompetitionTeamsArgs {
  children?: FC<PlayerForCompetitionTeam>,
}

export const ListPlayerForCompetitionTeamsItem: FC<PlayerForCompetitionTeam> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/playerForCompetitionTeams/${props.id}/show`}
    >
      <ListItemText
        primary={
          <>
            <div>
              {`Id: ${props.id}`}
            </div>
            <div>
              {`Team for competition id: ${props.teamForCompetitionId}`}
            </div>
            <div>
              {`Player id: ${props.playerId}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListPlayerForCompetitionTeamsWidget: FC<ListPlayerForCompetitionTeamsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListPlayerForCompetitionTeamsItem,
  ...rest
}) => {
  return (
    <ListWidget<PlayerForCompetitionTeam>
      {...rest}
      source='playerForCompetitionTeams'
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
          $filter: PlayerForCompetitionTeamFilter,
        ) {
          allPlayerForCompetitionTeams(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            teamForCompetitionId
            playerId
          }
        }
      `}
      resultToValue={result => result?.allPlayerForCompetitionTeams}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListPlayerForCompetitionTeamsWidget;
