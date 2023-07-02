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
  User,
  QueryAllUsersArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListUsersWidgetProps extends
Omit<ListWidgetProps<User>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllUsersArgs {
  children?: FC<User>,
}

export const ListUsersItem: FC<User> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/users/${props.id}/show`}
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
              {`Lastname: ${props.lastname}`}
            </div>
            <div>
              {`Firstname: ${props.firstname}`}
            </div>
            <div>
              {`Email: ${props.email}`}
            </div>
            <div>
              {`Tenant id: ${props.tenantId}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListUsersWidget: FC<ListUsersWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListUsersItem,
  ...rest
}) => {
  return (
    <ListWidget<User>
      {...rest}
      source='users'
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
          $filter: UserFilter,
        ) {
          allUsers(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
            lastname
            firstname
            email
            tenantId
          }
        }
      `}
      resultToValue={result => result?.allUsers}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListUsersWidget;
