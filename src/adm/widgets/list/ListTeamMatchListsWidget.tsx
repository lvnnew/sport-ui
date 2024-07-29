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
  TeamMatchList,
  QueryAllTeamMatchListsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListTeamMatchListsWidgetProps extends
Omit<ListWidgetProps<TeamMatchList>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllTeamMatchListsArgs {
  children?: FC<TeamMatchList>,
}

export const ListTeamMatchListsItem: FC<TeamMatchList> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/teamMatchLists/${props.id}/show`}
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

const ListTeamMatchListsWidget: FC<ListTeamMatchListsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListTeamMatchListsItem,
  ...rest
}) => {
  return (
    <ListWidget<TeamMatchList>
      {...rest}
      source='teamMatchLists'
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
          $filter: TeamMatchListFilter,
        ) {
          allTeamMatchLists(
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
      resultToValue={result => result?.allTeamMatchLists}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListTeamMatchListsWidget;
