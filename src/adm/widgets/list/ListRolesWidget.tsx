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
  Role,
  QueryAllRolesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListRolesWidgetProps extends
Omit<ListWigetProps<Role>, 'request' | 'resultToValue'| 'children'>,
QueryAllRolesArgs {
  children?: FC<Role>,
}

export const ListRolesItem: FC<Role> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/roles/${props.id}/show`}
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
              {`Has full access: ${props.hasFullAccess}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListRolesWidget: FC<ListRolesWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListRolesItem,
  ...rest
}) => {
  return (
    <ListWiget<Role>
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
          $filter: RoleFilter,
        ) {
          allRoles(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
            hasFullAccess
          }
        }
      `}
      resultToValue={result => result?.allRoles}
    >
      {(record) => children(record)}
    </ListWiget>
  );
};

export default ListRolesWidget;
