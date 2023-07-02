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
  MessageTemplateLangVariant,
  QueryAllMessageTemplateLangVariantsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListMessageTemplateLangVariantsWidgetProps extends
Omit<ListWidgetProps<MessageTemplateLangVariant>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllMessageTemplateLangVariantsArgs {
  children?: FC<MessageTemplateLangVariant>,
}

export const ListMessageTemplateLangVariantsItem: FC<MessageTemplateLangVariant> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/messageTemplateLangVariants/${props.id}/show`}
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
              {`Subject template: ${props.subjectTemplate}`}
            </div>
            <div>
              {`Body template: ${props.bodyTemplate}`}
            </div>
            <div>
              {`Message template id: ${props.messageTemplateId}`}
            </div>
            <div>
              {`Language id: ${props.languageId}`}
            </div>
            <div>
              {`Additional style: ${props.additionalStyle}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListMessageTemplateLangVariantsWidget: FC<ListMessageTemplateLangVariantsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListMessageTemplateLangVariantsItem,
  ...rest
}) => {
  return (
    <ListWidget<MessageTemplateLangVariant>
      {...rest}
      source='messageTemplateLangVariants'
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
          $filter: MessageTemplateLangVariantFilter,
        ) {
          allMessageTemplateLangVariants(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
            subjectTemplate
            bodyTemplate
            messageTemplateId
            languageId
            additionalStyle
          }
        }
      `}
      resultToValue={result => result?.allMessageTemplateLangVariants}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListMessageTemplateLangVariantsWidget;
