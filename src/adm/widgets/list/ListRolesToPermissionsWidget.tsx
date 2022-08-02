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
  RolesToPermission,
  QueryAllRolesToPermissionsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListRolesToPermissionsWidgetProps extends
Omit<ListWigetProps<RolesToPermission>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllRolesToPermissionsArgs {
  children?: FC<RolesToPermission>,
}

export const ListRolesToPermissionsItem: FC<RolesToPermission> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/rolesToPermissions/${props.id}/show`}
    >
      <ListItemText
        primary={
          <>
            <div>
              {`Id: ${props.id}`}
            </div>
            <div>
              {`Role id: ${props.roleId}`}
            </div>
            <div>
              {`Permission id: ${props.permissionId}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListRolesToPermissionsWidget: FC<ListRolesToPermissionsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListRolesToPermissionsItem,
  ...rest
}) => {
  return (
    <ListWiget<RolesToPermission>
      {...rest}
      source='rolesToPermissions'
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
          $filter: RolesToPermissionFilter,
        ) {
          allRolesToPermissions(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            roleId
            permissionId
          }
        }
      `}
      resultToValue={result => result?.allRolesToPermissions}
    >
      {(record) => children(record)}
    </ListWiget>
  );
};

export default ListRolesToPermissionsWidget;
