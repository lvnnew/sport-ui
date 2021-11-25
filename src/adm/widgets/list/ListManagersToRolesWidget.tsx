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
              {`Manager id: ${props.managerId}`}
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
            managerId
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
