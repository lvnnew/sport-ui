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
  Role,
  QueryAllRolesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListRolesWidgetProps extends
Omit<ListWidgetProps<Role>, 'request' | 'resultToValue'| 'children' | 'source'>,
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
              {`Has all permissions: ${props.hasAllPermissions}`}
            </div>
            <div>
              {`All tenants available: ${props.allTenantsAvailable}`}
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
    <ListWidget<Role>
      {...rest}
      source='roles'
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
            hasAllPermissions
            allTenantsAvailable
          }
        }
      `}
      resultToValue={result => result?.allRoles}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListRolesWidget;
