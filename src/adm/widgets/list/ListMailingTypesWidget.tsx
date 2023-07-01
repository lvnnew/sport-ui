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
  MailingType,
  QueryAllMailingTypesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListMailingTypesWidgetProps extends
Omit<ListWidgetProps<MailingType>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllMailingTypesArgs {
  children?: FC<MailingType>,
}

export const ListMailingTypesItem: FC<MailingType> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/mailingTypes/${props.id}/show`}
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

const ListMailingTypesWidget: FC<ListMailingTypesWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListMailingTypesItem,
  ...rest
}) => {
  return (
    <ListWidget<MailingType>
      {...rest}
      source='mailingTypes'
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
          $filter: MailingTypeFilter,
        ) {
          allMailingTypes(
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
      resultToValue={result => result?.allMailingTypes}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListMailingTypesWidget;
