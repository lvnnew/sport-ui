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
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListWiget, {
  ListWigetProps,
} from '../../../widgets/ListWiget';
import {
  User,
  QueryAllUsersArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListUsersWidgetProps extends
Omit<ListWigetProps<User>, 'request' | 'resultToValue'| 'children'>,
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
              {`Lastname: ${props.lastname}`}
            </div>
            <div>
              {`Firstname: ${props.firstname}`}
            </div>
            <div>
              {`Email: ${props.email}`}
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
    <ListWiget<User>
      {...rest}
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
            lastname
            firstname
            email
          }
        }
      `}
      resultToValue={result => result?.allUsers}
    >
      {(record) => children(record)}
    </ListWiget>
  );
};

export default ListUsersWidget;
