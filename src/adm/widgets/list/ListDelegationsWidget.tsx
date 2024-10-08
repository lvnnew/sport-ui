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
  Delegation,
  QueryAllDelegationsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListDelegationsWidgetProps extends
Omit<ListWidgetProps<Delegation>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllDelegationsArgs {
  children?: FC<Delegation>,
}

export const ListDelegationsItem: FC<Delegation> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/delegations/${props.id}/show`}
    >
      <ListItemText
        primary={
          <>
            <div>
              {`Id: ${props.id}`}
            </div>
            <div>
              {`From id: ${props.fromId}`}
            </div>
            <div>
              {`To id: ${props.toId}`}
            </div>
            <div>
              {`Expires at: ${props.expiresAt}`}
            </div>
            <div>
              {`Active: ${props.active}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListDelegationsWidget: FC<ListDelegationsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListDelegationsItem,
  ...rest
}) => {
  return (
    <ListWidget<Delegation>
      {...rest}
      source='delegations'
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
          $filter: DelegationFilter,
        ) {
          allDelegations(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            fromId
            toId
            expiresAt
            active
          }
        }
      `}
      resultToValue={result => result?.allDelegations}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListDelegationsWidget;
