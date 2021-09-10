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
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListWiget, {
  ListWigetProps,
} from '../../../widgets/ListWiget';
import {
  ManagersToRole,
  QueryAllManagersToRolesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListManagersToRolesWidgetProps extends
Omit<ListWigetProps<ManagersToRole>, 'request' | 'resultToValue'| 'children'>,
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
              {`Title: ${props.title}`}
            </div>
            <div>
              {`Manage id: ${props.manageId}`}
            </div>
            <div>
              {`Role id: ${props.roleId}`}
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
    <ListWiget<ManagersToRole>
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
            title
            manageId
            roleId
          }
        }
      `}
      resultToValue={result => result?.allManagersToRoles}
    >
      {(record) => children(record)}
    </ListWiget>
  );
};

export default ListManagersToRolesWidget;
