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
  WscUser,
  QueryAllWscUsersArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListWscUsersWidgetProps extends
Omit<ListWidgetProps<WscUser>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllWscUsersArgs {
  children?: FC<WscUser>,
}

export const ListWscUsersItem: FC<WscUser> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/wscUsers/${props.id}/show`}
    >
      <ListItemText
        primary={
          <>
            <div>
              {`Id: ${props.id}`}
            </div>
            <div>
              {`Login: ${props.login}`}
            </div>
            <div>
              {`Password hash: ${props.passwordHash}`}
            </div>
            <div>
              {`Access token: ${props.accessToken}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListWscUsersWidget: FC<ListWscUsersWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListWscUsersItem,
  ...rest
}) => {
  return (
    <ListWidget<WscUser>
      {...rest}
      source='wscUsers'
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
          $filter: WscUserFilter,
        ) {
          allWscUsers(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            login
            passwordHash
            accessToken
          }
        }
      `}
      resultToValue={result => result?.allWscUsers}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListWscUsersWidget;
