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
  ManagerLogin,
  QueryAllManagerLoginsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListManagerLoginsWidgetProps extends
Omit<ListWidgetProps<ManagerLogin>, 'request' | 'resultToValue'| 'children' | 'source'>,
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
    <ListWidget<ManagerLogin>
      {...rest}
      source='managerLogins'
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
    </ListWidget>
  );
};

export default ListManagerLoginsWidget;
