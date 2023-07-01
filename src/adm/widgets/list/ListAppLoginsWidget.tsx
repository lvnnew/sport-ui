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
  AppLogin,
  QueryAllAppLoginsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListAppLoginsWidgetProps extends
Omit<ListWidgetProps<AppLogin>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllAppLoginsArgs {
  children?: FC<AppLogin>,
}

export const ListAppLoginsItem: FC<AppLogin> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/appLogins/${props.id}/show`}
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
              {`User id: ${props.userId}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListAppLoginsWidget: FC<ListAppLoginsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListAppLoginsItem,
  ...rest
}) => {
  return (
    <ListWidget<AppLogin>
      {...rest}
      source='appLogins'
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
          $filter: AppLoginFilter,
        ) {
          allAppLogins(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            login
            passwordHash
            userId
          }
        }
      `}
      resultToValue={result => result?.allAppLogins}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListAppLoginsWidget;
