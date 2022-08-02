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
  Permission,
  QueryAllPermissionsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListPermissionsWidgetProps extends
Omit<ListWigetProps<Permission>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllPermissionsArgs {
  children?: FC<Permission>,
}

export const ListPermissionsItem: FC<Permission> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/permissions/${props.id}/show`}
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
          </>
        }
      />
    </ListItem>
  );
};

const ListPermissionsWidget: FC<ListPermissionsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListPermissionsItem,
  ...rest
}) => {
  return (
    <ListWiget<Permission>
      {...rest}
      source='permissions'
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
          $filter: PermissionFilter,
        ) {
          allPermissions(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
          }
        }
      `}
      resultToValue={result => result?.allPermissions}
    >
      {(record) => children(record)}
    </ListWiget>
  );
};

export default ListPermissionsWidget;
