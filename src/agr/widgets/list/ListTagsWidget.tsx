import React, {
  FC,
} from 'react';
import {
  gql,
} from '@apollo/client';
import {
  Link,
} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListWiget, {
  ListWigetProps,
} from '../../../widgets/ListWiget';
import {
  Tag,
} from '../../../generated/graphql';
import {QueryAllTagsArgs} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListTagsWidgetProps extends
Omit<ListWigetProps<Tag>, 'request' | 'resultToValue'| 'children'>,
QueryAllTagsArgs {}

const ListTagsWidget: FC<ListTagsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
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
      {(record) => <ListItem
        button
        component={Link}
        key={record.id}
        to={`/tags/${record.id}/show`}
      >
        <ListItemText
          primary={
            <>
              <div>
                {`Id: ${record.id}`}
              </div>
              <div>
                {`Comment: ${record.comment}`}
              </div>
            </>
          }
        />
      </ListItem>}
    </ListWiget>
  );
};

export default ListTagsWidget;
