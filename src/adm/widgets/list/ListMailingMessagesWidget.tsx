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
  MailingMessage,
  QueryAllMailingMessagesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListMailingMessagesWidgetProps extends
Omit<ListWidgetProps<MailingMessage>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllMailingMessagesArgs {
  children?: FC<MailingMessage>,
}

export const ListMailingMessagesItem: FC<MailingMessage> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/mailingMessages/${props.id}/show`}
    >
      <ListItemText
        primary={
          <>
            <div>
              {`Id: ${props.id}`}
            </div>
            <div>
              {`Mailing campaign id: ${props.mailingCampaignId}`}
            </div>
            <div>
              {`Template id: ${props.templateId}`}
            </div>
            <div>
              {`Language id: ${props.languageId}`}
            </div>
            <div>
              {`To: ${props.to}`}
            </div>
            <div>
              {`Locals: ${props.locals}`}
            </div>
            <div>
              {`Locals hash: ${props.localsHash}`}
            </div>
            <div>
              {`Priority: ${props.priority}`}
            </div>
            <div>
              {`Date created: ${props.dateCreated}`}
            </div>
            <div>
              {`Date sent: ${props.dateSent}`}
            </div>
            <div>
              {`Error: ${props.error}`}
            </div>
            <div>
              {`Html: ${props.html}`}
            </div>
            <div>
              {`Text: ${props.text}`}
            </div>
            <div>
              {`Unique key: ${props.uniqueKey}`}
            </div>
            <div>
              {`Subject: ${props.subject}`}
            </div>
            <div>
              {`Mailing message status id: ${props.mailingMessageStatusId}`}
            </div>
            <div>
              {`Message template lang variant id: ${props.messageTemplateLangVariantId}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListMailingMessagesWidget: FC<ListMailingMessagesWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListMailingMessagesItem,
  ...rest
}) => {
  return (
    <ListWidget<MailingMessage>
      {...rest}
      source='mailingMessages'
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
          $filter: MailingMessageFilter,
        ) {
          allMailingMessages(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            mailingCampaignId
            templateId
            languageId
            to
            locals
            localsHash
            priority
            dateCreated
            dateSent
            error
            html
            text
            uniqueKey
            subject
            mailingMessageStatusId
            messageTemplateLangVariantId
          }
        }
      `}
      resultToValue={result => result?.allMailingMessages}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListMailingMessagesWidget;
