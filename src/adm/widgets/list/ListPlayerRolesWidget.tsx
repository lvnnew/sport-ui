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
  PlayerRole,
  QueryAllPlayerRolesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListPlayerRolesWidgetProps extends
Omit<ListWidgetProps<PlayerRole>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllPlayerRolesArgs {
  children?: FC<PlayerRole>,
}

export const ListPlayerRolesItem: FC<PlayerRole> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/playerRoles/${props.id}/show`}
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
              {`Short title: ${props.shortTitle}`}
            </div>
            <div>
              {`Player aggregated role id: ${props.playerAggregatedRoleId}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListPlayerRolesWidget: FC<ListPlayerRolesWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListPlayerRolesItem,
  ...rest
}) => {
  return (
    <ListWidget<PlayerRole>
      {...rest}
      source='playerRoles'
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
          $filter: PlayerRoleFilter,
        ) {
          allPlayerRoles(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
            shortTitle
            playerAggregatedRoleId
          }
        }
      `}
      resultToValue={result => result?.allPlayerRoles}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListPlayerRolesWidget;
