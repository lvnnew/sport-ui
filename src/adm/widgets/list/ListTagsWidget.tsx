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
  Tag,
  QueryAllTagsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListTagsWidgetProps extends
Omit<ListWigetProps<Tag>, 'request' | 'resultToValue'| 'children'>,
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
    <ListWiget<Tag>
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
    </ListWiget>
  );
};

export default ListTagsWidget;
