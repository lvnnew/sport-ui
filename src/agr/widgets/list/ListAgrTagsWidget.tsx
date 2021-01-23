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
  AgrTag,
} from '../../../generated/graphql';
import {QueryAllAgrTagsArgs} from '../../../generated/graphql';

interface ListAgrTagsWidgetProps extends
Omit<ListWigetProps<AgrTag>, 'request' | 'resultToValue'| 'children'>,
QueryAllAgrTagsArgs {}

const ListAgrTagsWidget: FC<ListAgrTagsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  ...rest
}) => {

  return (
    <ListWiget<AgrTag>
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
          $filter: AgrTagFilter,
        ) {
          allAgrTags(
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
      resultToValue={result => result?.allAgrTags}
    >
      {(record) => <ListItem
        button
        component={Link}
        key={record.id}
        to={`/agrTags/${record.id}/show`}
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

export default ListAgrTagsWidget;
