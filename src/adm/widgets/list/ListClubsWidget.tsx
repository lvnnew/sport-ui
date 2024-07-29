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
  Club,
  QueryAllClubsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListClubsWidgetProps extends
Omit<ListWidgetProps<Club>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllClubsArgs {
  children?: FC<Club>,
}

export const ListClubsItem: FC<Club> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/clubs/${props.id}/show`}
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
              {`Created by manager id: ${props.createdByManagerId}`}
            </div>
            <div>
              {`Last changed by manager id: ${props.lastChangedByManagerId}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListClubsWidget: FC<ListClubsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListClubsItem,
  ...rest
}) => {
  return (
    <ListWidget<Club>
      {...rest}
      source='clubs'
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
          $filter: ClubFilter,
        ) {
          allClubs(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
            createdByManagerId
            lastChangedByManagerId
          }
        }
      `}
      resultToValue={result => result?.allClubs}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListClubsWidget;
