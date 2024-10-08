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
  ManagersToRole,
  QueryAllManagersToRolesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListManagersToRolesWidgetProps extends
Omit<ListWidgetProps<ManagersToRole>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllManagersToRolesArgs {
  children?: FC<ManagersToRole>,
}

export const ListManagersToRolesItem: FC<ManagersToRole> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/managersToRoles/${props.id}/show`}
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
              {`Role id: ${props.roleId}`}
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

const ListManagersToRolesWidget: FC<ListManagersToRolesWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListManagersToRolesItem,
  ...rest
}) => {
  return (
    <ListWidget<ManagersToRole>
      {...rest}
      source='managersToRoles'
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
          $filter: ManagersToRoleFilter,
        ) {
          allManagersToRoles(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            managerId
            roleId
            expiresAt
          }
        }
      `}
      resultToValue={result => result?.allManagersToRoles}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListManagersToRolesWidget;
