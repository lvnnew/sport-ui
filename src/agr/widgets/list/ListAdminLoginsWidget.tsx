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
  AdminLogin,
} from '../../../generated/graphql';
import {QueryAllAdminLoginsArgs} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListAdminLoginsWidgetProps extends
Omit<ListWigetProps<AdminLogin>, 'request' | 'resultToValue'| 'children'>,
QueryAllAdminLoginsArgs {
  children?: FC<AdminLogin>,
}

export const ListAdminLoginsItem: FC<AdminLogin> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/adminLogins/${props.id}/show`}
    >
      <ListItemText
        primary={
          <>
            <div>
              {`Id: ${props.id}`}
            </div>
            <div>
              {`Login: ${props.login}`}
            </div>
            <div>
              {`Password hash: ${props.passwordHash}`}
            </div>
            <div>
              {`Role: ${props.role}`}
            </div>
            <div>
              {`Email verified: ${props.emailVerified}`}
            </div>
            <div>
              {`Initial password changed: ${props.initialPasswordChanged}`}
            </div>
            <div>
              {`Locked: ${props.locked}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListAdminLoginsWidget: FC<ListAdminLoginsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListAdminLoginsItem,
  ...rest
}) => {
  return (
    <ListWiget<AdminLogin>
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
          $filter: AdminLoginFilter,
        ) {
          allAdminLogins(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            login
            passwordHash
            role
            emailVerified
            initialPasswordChanged
            locked
          }
        }
      `}
      resultToValue={result => result?.allAdminLogins}
    >
      {(record) => children(record)}
    </ListWiget>
  );
};

export default ListAdminLoginsWidget;
