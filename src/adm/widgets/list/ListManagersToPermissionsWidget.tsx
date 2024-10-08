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
  ManagersToPermission,
  QueryAllManagersToPermissionsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListManagersToPermissionsWidgetProps extends
Omit<ListWidgetProps<ManagersToPermission>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllManagersToPermissionsArgs {
  children?: FC<ManagersToPermission>,
}

export const ListManagersToPermissionsItem: FC<ManagersToPermission> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/managersToPermissions/${props.id}/show`}
    >
      <ListItemText
        primary={
          <>
            <div>
              {`Id: ${props.id}`}
            </div>
            <div>
              {`Manager id: ${props.managerId}`}
            </div>
            <div>
              {`Permission id: ${props.permissionId}`}
            </div>
            <div>
              {`Expires at: ${props.expiresAt}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListManagersToPermissionsWidget: FC<ListManagersToPermissionsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListManagersToPermissionsItem,
  ...rest
}) => {
  return (
    <ListWidget<ManagersToPermission>
      {...rest}
      source='managersToPermissions'
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
          $filter: ManagersToPermissionFilter,
        ) {
          allManagersToPermissions(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            managerId
            permissionId
            expiresAt
          }
        }
      `}
      resultToValue={result => result?.allManagersToPermissions}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListManagersToPermissionsWidget;
