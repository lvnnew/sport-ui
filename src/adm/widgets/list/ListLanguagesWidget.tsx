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
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListWiget, {
  ListWigetProps,
} from '../../../widgets/ListWiget';
import {
  Language,
  QueryAllLanguagesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListLanguagesWidgetProps extends
Omit<ListWigetProps<Language>, 'request' | 'resultToValue'| 'children'>,
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
    <ListWiget<Language>
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
    </ListWiget>
  );
};

export default ListLanguagesWidget;
