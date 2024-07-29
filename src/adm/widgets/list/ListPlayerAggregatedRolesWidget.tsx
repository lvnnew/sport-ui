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
  PlayerAggregatedRole,
  QueryAllPlayerAggregatedRolesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListPlayerAggregatedRolesWidgetProps extends
Omit<ListWidgetProps<PlayerAggregatedRole>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllPlayerAggregatedRolesArgs {
  children?: FC<PlayerAggregatedRole>,
}

export const ListPlayerAggregatedRolesItem: FC<PlayerAggregatedRole> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/playerAggregatedRoles/${props.id}/show`}
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
          </>
        }
      />
    </ListItem>
  );
};

const ListPlayerAggregatedRolesWidget: FC<ListPlayerAggregatedRolesWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListPlayerAggregatedRolesItem,
  ...rest
}) => {
  return (
    <ListWidget<PlayerAggregatedRole>
      {...rest}
      source='playerAggregatedRoles'
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
          $filter: PlayerAggregatedRoleFilter,
        ) {
          allPlayerAggregatedRoles(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
          }
        }
      `}
      resultToValue={result => result?.allPlayerAggregatedRoles}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListPlayerAggregatedRolesWidget;
