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
  Language,
  QueryAllLanguagesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListLanguagesWidgetProps extends
Omit<ListWidgetProps<Language>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllLanguagesArgs {
  children?: FC<Language>,
}

export const ListLanguagesItem: FC<Language> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/languages/${props.id}/show`}
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

const ListLanguagesWidget: FC<ListLanguagesWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListLanguagesItem,
  ...rest
}) => {
  return (
    <ListWidget<Language>
      {...rest}
      source='languages'
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
          $filter: LanguageFilter,
        ) {
          allLanguages(
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
      resultToValue={result => result?.allLanguages}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListLanguagesWidget;
