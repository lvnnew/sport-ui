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
  Glossary,
  QueryAllGlossariesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListGlossariesWidgetProps extends
Omit<ListWidgetProps<Glossary>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllGlossariesArgs {
  children?: FC<Glossary>,
}

export const ListGlossariesItem: FC<Glossary> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/glossaries/${props.id}/show`}
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
              {`Description: ${props.description}`}
            </div>
            <div>
              {`Period type id: ${props.periodTypeId}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListGlossariesWidget: FC<ListGlossariesWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListGlossariesItem,
  ...rest
}) => {
  return (
    <ListWidget<Glossary>
      {...rest}
      source='glossaries'
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
          $filter: GlossaryFilter,
        ) {
          allGlossaries(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
            description
            periodTypeId
          }
        }
      `}
      resultToValue={result => result?.allGlossaries}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListGlossariesWidget;
