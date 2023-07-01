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
  Tag,
  QueryAllTagsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListTagsWidgetProps extends
Omit<ListWidgetProps<Tag>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllTagsArgs {
  children?: FC<Tag>,
}

export const ListTagsItem: FC<Tag> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/tags/${props.id}/show`}
    >
      <ListItemText
        primary={
          <>
            <div>
              {`Id: ${props.id}`}
            </div>
            <div>
              {`Comment: ${props.comment}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListTagsWidget: FC<ListTagsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListTagsItem,
  ...rest
}) => {
  return (
    <ListWidget<Tag>
      {...rest}
      source='tags'
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
          $filter: TagFilter,
        ) {
          allTags(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            comment
          }
        }
      `}
      resultToValue={result => result?.allTags}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListTagsWidget;
