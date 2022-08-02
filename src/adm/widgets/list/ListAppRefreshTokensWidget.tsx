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
import ListWiget, {
  ListWigetProps,
} from '../../../widgets/ListWiget';
import {
  AppRefreshToken,
  QueryAllAppRefreshTokensArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListAppRefreshTokensWidgetProps extends
Omit<ListWigetProps<AppRefreshToken>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllAppRefreshTokensArgs {
  children?: FC<AppRefreshToken>,
}

export const ListAppRefreshTokensItem: FC<AppRefreshToken> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/appRefreshTokens/${props.id}/show`}
    >
      <ListItemText
        primary={
          <>
            <div>
              {`Id: ${props.id}`}
            </div>
            <div>
              {`Create: ${props.create}`}
            </div>
            <div>
              {`User id: ${props.userId}`}
            </div>
            <div>
              {`Token: ${props.token}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListAppRefreshTokensWidget: FC<ListAppRefreshTokensWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListAppRefreshTokensItem,
  ...rest
}) => {
  return (
    <ListWiget<AppRefreshToken>
      {...rest}
      source='appRefreshTokens'
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
          $filter: AppRefreshTokenFilter,
        ) {
          allAppRefreshTokens(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            create
            userId
            token
          }
        }
      `}
      resultToValue={result => result?.allAppRefreshTokens}
    >
      {(record) => children(record)}
    </ListWiget>
  );
};

export default ListAppRefreshTokensWidget;
