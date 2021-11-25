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
  MessageTemplate,
  QueryAllMessageTemplatesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListMessageTemplatesWidgetProps extends
Omit<ListWigetProps<MessageTemplate>, 'request' | 'resultToValue'| 'children'>,
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
