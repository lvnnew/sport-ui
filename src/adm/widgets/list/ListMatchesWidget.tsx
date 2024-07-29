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
  Match,
  QueryAllMatchesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListMatchesWidgetProps extends
Omit<ListWidgetProps<Match>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllMatchesArgs {
  children?: FC<Match>,
}

export const ListMatchesItem: FC<Match> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/matches/${props.id}/show`}
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
              {`Competition id: ${props.competitionId}`}
            </div>
            <div>
              {`Match date: ${props.matchDate}`}
            </div>
            <div>
              {`Match time: ${props.matchTime}`}
            </div>
            <div>
              {`Duration: ${props.duration}`}
            </div>
            <div>
              {`Place: ${props.place}`}
            </div>
            <div>
              {`Active: ${props.active}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListMatchesWidget: FC<ListMatchesWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListMatchesItem,
  ...rest
}) => {
  return (
    <ListWidget<Match>
      {...rest}
      source='matches'
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
          $filter: MatchFilter,
        ) {
          allMatches(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            createdByManagerId
            lastChangedByManagerId
            title
            competitionId
            firstTeamId
            firstTeamColor
            firstTeamOnFieldId
            secondTeamId
            secondTeamColor
            matchDate
            matchTime
            duration
            place
            active
            firstTeamPoints
            secondTeamPoints
            redCardFirstTeam
            redCardSecondTeam
            yellowCardFirstTeam
            yellowCardSecondTeam
            firstTeamHandleTime
            secondTeamHandleTime
            linkToProtocol
            matchStatusId
          }
        }
      `}
      resultToValue={result => result?.allMatches}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListMatchesWidget;
