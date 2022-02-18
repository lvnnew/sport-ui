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
import {ListItem, ListItemText} from '@material-ui/core';
import ListWiget, {
  ListWigetProps,
} from '../../../widgets/ListWiget';
import {
  Entity,
  QueryAllEntitiesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListEntitiesWidgetProps extends
Omit<ListWigetProps<Entity>, 'request' | 'resultToValue'| 'children'>,
QueryAllEntitiesArgs {
  children?: FC<Entity>,
}

export const ListEntitiesItem: FC<Entity> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/entities/${props.id}/show`}
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

const ListEntitiesWidget: FC<ListEntitiesWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListEntitiesItem,
  ...rest
}) => {
  return (
    <ListWiget<Entity>
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
          $filter: EntityFilter,
        ) {
          allEntities(
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
      resultToValue={result => result?.allEntities}
    >
      {(record) => children(record)}
    </ListWiget>
  );
};

export default ListEntitiesWidget;
