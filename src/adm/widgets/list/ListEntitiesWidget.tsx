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
  Entity,
  QueryAllEntitiesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListEntitiesWidgetProps extends
Omit<ListWidgetProps<Entity>, 'request' | 'resultToValue'| 'children' | 'source'>,
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
    <ListWidget<Entity>
      {...rest}
      source='entities'
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
    </ListWidget>
  );
};

export default ListEntitiesWidget;
