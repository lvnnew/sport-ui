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
  MailingMessageStatus,
  QueryAllMailingMessageStatusesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListMailingMessageStatusesWidgetProps extends
Omit<ListWigetProps<MailingMessageStatus>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllMailingMessageStatusesArgs {
  children?: FC<MailingMessageStatus>,
}

export const ListMailingMessageStatusesItem: FC<MailingMessageStatus> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/mailingMessageStatuses/${props.id}/show`}
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
              {`Final: ${props.final}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListMailingMessageStatusesWidget: FC<ListMailingMessageStatusesWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListMailingMessageStatusesItem,
  ...rest
}) => {
  return (
    <ListWiget<MailingMessageStatus>
      {...rest}
      source='mailingMessageStatuses'
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
          $filter: MailingMessageStatusFilter,
        ) {
          allMailingMessageStatuses(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
            final
          }
        }
      `}
      resultToValue={result => result?.allMailingMessageStatuses}
    >
      {(record) => children(record)}
    </ListWiget>
  );
};

export default ListMailingMessageStatusesWidget;
