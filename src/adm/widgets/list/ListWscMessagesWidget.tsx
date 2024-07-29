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
  WscMessage,
  QueryAllWscMessagesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListWscMessagesWidgetProps extends
Omit<ListWidgetProps<WscMessage>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllWscMessagesArgs {
  children?: FC<WscMessage>,
}

export const ListWscMessagesItem: FC<WscMessage> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/wscMessages/${props.id}/show`}
    >
      <ListItemText
        primary={
          <>
            <div>
              {`Id: ${props.id}`}
            </div>
            <div>
              {`External id: ${props.externalId}`}
            </div>
            <div>
              {`Date time raw: ${props.dateTimeRaw}`}
            </div>
            <div>
              {`Sender: ${props.sender}`}
            </div>
            <div>
              {`Content: ${props.content}`}
            </div>
            <div>
              {`Wsc user id: ${props.wscUserId}`}
            </div>
            <div>
              {`Wsc contact id: ${props.wscContactId}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListWscMessagesWidget: FC<ListWscMessagesWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListWscMessagesItem,
  ...rest
}) => {
  return (
    <ListWidget<WscMessage>
      {...rest}
      source='wscMessages'
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
          $filter: WscMessageFilter,
        ) {
          allWscMessages(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            externalId
            dateTimeRaw
            sender
            content
            wscUserId
            wscContactId
          }
        }
      `}
      resultToValue={result => result?.allWscMessages}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListWscMessagesWidget;
