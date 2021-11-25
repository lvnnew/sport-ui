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
  ManagerLogin,
  QueryAllManagerLoginsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListManagerLoginsWidgetProps extends
Omit<ListWigetProps<ManagerLogin>, 'request' | 'resultToValue'| 'children'>,
QueryAllManagerLoginsArgs {
  children?: FC<ManagerLogin>,
}

export const ListManagerLoginsItem: FC<ManagerLogin> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/managerLogins/${props.id}/show`}
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
            <div>
              {`Manager id: ${props.managerId}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListManagerLoginsWidget: FC<ListManagerLoginsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListManagerLoginsItem,
  ...rest
}) => {
  return (
    <ListWiget<ManagerLogin>
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
          $filter: ManagerLoginFilter,
        ) {
          allManagerLogins(
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
            managerId
          }
        }
      `}
      resultToValue={result => result?.allManagerLogins}
    >
      {(record) => children(record)}
    </ListWiget>
  );
};

export default ListManagerLoginsWidget;
