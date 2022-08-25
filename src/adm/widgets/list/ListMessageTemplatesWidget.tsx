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
import ListWiget, {
  ListWigetProps,
} from '../../../widgets/ListWiget';
import {
  MessageTemplate,
  QueryAllMessageTemplatesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListMessageTemplatesWidgetProps extends
Omit<ListWigetProps<MessageTemplate>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllMessageTemplatesArgs {
  children?: FC<MessageTemplate>,
}

export const ListMessageTemplatesItem: FC<MessageTemplate> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/messageTemplates/${props.id}/show`}
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
              {`Secret data: ${props.secretData}`}
            </div>
            <div>
              {`Message type id: ${props.messageTypeId}`}
            </div>
            <div>
              {`Template style id: ${props.templateStyleId}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListMessageTemplatesWidget: FC<ListMessageTemplatesWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListMessageTemplatesItem,
  ...rest
}) => {
  return (
    <ListWiget<MessageTemplate>
      {...rest}
      source='messageTemplates'
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
          $filter: MessageTemplateFilter,
        ) {
          allMessageTemplates(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
            secretData
            messageTypeId
            templateStyleId
          }
        }
      `}
      resultToValue={result => result?.allMessageTemplates}
    >
      {(record) => children(record)}
    </ListWiget>
  );
};

export default ListMessageTemplatesWidget;
