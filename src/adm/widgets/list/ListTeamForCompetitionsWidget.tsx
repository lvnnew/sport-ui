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
  TeamForCompetition,
  QueryAllTeamForCompetitionsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListTeamForCompetitionsWidgetProps extends
Omit<ListWidgetProps<TeamForCompetition>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllTeamForCompetitionsArgs {
  children?: FC<TeamForCompetition>,
}

export const ListTeamForCompetitionsItem: FC<TeamForCompetition> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/teamForCompetitions/${props.id}/show`}
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
              {`Full title: ${props.fullTitle}`}
            </div>
            <div>
              {`Team id: ${props.teamId}`}
            </div>
            <div>
              {`Competition id: ${props.competitionId}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListTeamForCompetitionsWidget: FC<ListTeamForCompetitionsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListTeamForCompetitionsItem,
  ...rest
}) => {
  return (
    <ListWidget<TeamForCompetition>
      {...rest}
      source='teamForCompetitions'
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
          $filter: TeamForCompetitionFilter,
        ) {
          allTeamForCompetitions(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
            fullTitle
            teamId
            competitionId
          }
        }
      `}
      resultToValue={result => result?.allTeamForCompetitions}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListTeamForCompetitionsWidget;
