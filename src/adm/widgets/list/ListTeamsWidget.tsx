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
  Team,
  QueryAllTeamsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListTeamsWidgetProps extends
Omit<ListWidgetProps<Team>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllTeamsArgs {
  children?: FC<Team>,
}

export const ListTeamsItem: FC<Team> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/teams/${props.id}/show`}
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
              {`Date of birth from: ${props.dateOfBirthFrom}`}
            </div>
            <div>
              {`Date of birth to: ${props.dateOfBirthTo}`}
            </div>
            <div>
              {`Created by manager id: ${props.createdByManagerId}`}
            </div>
            <div>
              {`Last changed by manager id: ${props.lastChangedByManagerId}`}
            </div>
            <div>
              {`Club id: ${props.clubId}`}
            </div>
            <div>
              {`File id: ${props.fileId}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListTeamsWidget: FC<ListTeamsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListTeamsItem,
  ...rest
}) => {
  return (
    <ListWidget<Team>
      {...rest}
      source='teams'
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
          $filter: TeamFilter,
        ) {
          allTeams(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
            dateOfBirthFrom
            dateOfBirthTo
            createdByManagerId
            lastChangedByManagerId
            clubId
            fileId
          }
        }
      `}
      resultToValue={result => result?.allTeams}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListTeamsWidget;
