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
  HistoryOfPlayerRole,
  QueryAllHistoryOfPlayerRolesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListHistoryOfPlayerRolesWidgetProps extends
Omit<ListWidgetProps<HistoryOfPlayerRole>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllHistoryOfPlayerRolesArgs {
  children?: FC<HistoryOfPlayerRole>,
}

export const ListHistoryOfPlayerRolesItem: FC<HistoryOfPlayerRole> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/historyOfPlayerRoles/${props.id}/show`}
    >
      <ListItemText
        primary={
          <>
            <div>
              {`Id: ${props.id}`}
            </div>
            <div>
              {`Match id: ${props.matchId}`}
            </div>
            <div>
              {`Player id: ${props.playerId}`}
            </div>
            <div>
              {`Player role id: ${props.playerRoleId}`}
            </div>
            <div>
              {`Status: ${props.status}`}
            </div>
            <div>
              {`Order: ${props.order}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListHistoryOfPlayerRolesWidget: FC<ListHistoryOfPlayerRolesWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListHistoryOfPlayerRolesItem,
  ...rest
}) => {
  return (
    <ListWidget<HistoryOfPlayerRole>
      {...rest}
      source='historyOfPlayerRoles'
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
          $filter: HistoryOfPlayerRoleFilter,
        ) {
          allHistoryOfPlayerRoles(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            matchId
            playerId
            playerRoleId
            status
            order
          }
        }
      `}
      resultToValue={result => result?.allHistoryOfPlayerRoles}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListHistoryOfPlayerRolesWidget;
