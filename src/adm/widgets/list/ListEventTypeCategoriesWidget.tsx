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
  EventTypeCategory,
  QueryAllEventTypeCategoriesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListEventTypeCategoriesWidgetProps extends
Omit<ListWidgetProps<EventTypeCategory>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllEventTypeCategoriesArgs {
  children?: FC<EventTypeCategory>,
}

export const ListEventTypeCategoriesItem: FC<EventTypeCategory> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/eventTypeCategories/${props.id}/show`}
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

const ListEventTypeCategoriesWidget: FC<ListEventTypeCategoriesWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListEventTypeCategoriesItem,
  ...rest
}) => {
  return (
    <ListWidget<EventTypeCategory>
      {...rest}
      source='eventTypeCategories'
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
          $filter: EventTypeCategoryFilter,
        ) {
          allEventTypeCategories(
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
      resultToValue={result => result?.allEventTypeCategories}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListEventTypeCategoriesWidget;
