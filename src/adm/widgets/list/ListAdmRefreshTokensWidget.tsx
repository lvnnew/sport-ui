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
  AdmRefreshToken,
  QueryAllAdmRefreshTokensArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListAdmRefreshTokensWidgetProps extends
Omit<ListWigetProps<AdmRefreshToken>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllAdmRefreshTokensArgs {
  children?: FC<AdmRefreshToken>,
}

export const ListAdmRefreshTokensItem: FC<AdmRefreshToken> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/admRefreshTokens/${props.id}/show`}
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
              {`Manager id: ${props.managerId}`}
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

const ListAdmRefreshTokensWidget: FC<ListAdmRefreshTokensWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListAdmRefreshTokensItem,
  ...rest
}) => {
  return (
    <ListWiget<AdmRefreshToken>
      {...rest}
      source='admRefreshTokens'
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
          $filter: AdmRefreshTokenFilter,
        ) {
          allAdmRefreshTokens(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            create
            managerId
            token
          }
        }
      `}
      resultToValue={result => result?.allAdmRefreshTokens}
    >
      {(record) => children(record)}
    </ListWiget>
  );
};

export default ListAdmRefreshTokensWidget;
