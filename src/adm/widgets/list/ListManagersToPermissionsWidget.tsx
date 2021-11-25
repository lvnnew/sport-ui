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
import ListItem from '@mui/base/ListItem';
import ListItemText from '@mui/base/ListItemText';
import ListWiget, {
  ListWigetProps,
} from '../../../widgets/ListWiget';
import {
  ManagersToPermission,
  QueryAllManagersToPermissionsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListManagersToPermissionsWidgetProps extends
Omit<ListWigetProps<ManagersToPermission>, 'request' | 'resultToValue'| 'children'>,
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
    <ListWiget<ManagersToPermission>
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
          }
        }
      `}
      resultToValue={result => result?.allManagersToPermissions}
    >
      {(record) => children(record)}
    </ListWiget>
  );
};

export default ListManagersToPermissionsWidget;
