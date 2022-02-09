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
import {ListItem, ListItemText} from '@material-ui/core';
import ListWiget, {
  ListWigetProps,
} from '../../../widgets/ListWiget';
import {
  MessageType,
  QueryAllMessageTypesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListMessageTypesWidgetProps extends
Omit<ListWigetProps<MessageType>, 'request' | 'resultToValue'| 'children'>,
QueryAllMessageTypesArgs {
  children?: FC<MessageType>,
}

export const ListMessageTypesItem: FC<MessageType> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/messageTypes/${props.id}/show`}
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
          </>
        }
      />
    </ListItem>
  );
};

const ListMessageTypesWidget: FC<ListMessageTypesWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListMessageTypesItem,
  ...rest
}) => {
  return (
    <ListWiget<MessageType>
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
          $filter: MessageTypeFilter,
        ) {
          allMessageTypes(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
            description
          }
        }
      `}
      resultToValue={result => result?.allMessageTypes}
    >
      {(record) => children(record)}
    </ListWiget>
  );
};

export default ListMessageTypesWidget;
