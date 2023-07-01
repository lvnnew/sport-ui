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
  MailingCampaign,
  QueryAllMailingCampaignsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListMailingCampaignsWidgetProps extends
Omit<ListWidgetProps<MailingCampaign>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllMailingCampaignsArgs {
  children?: FC<MailingCampaign>,
}

export const ListMailingCampaignsItem: FC<MailingCampaign> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/mailingCampaigns/${props.id}/show`}
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
              {`Mailing type id: ${props.mailingTypeId}`}
            </div>
            <div>
              {`Priority: ${props.priority}`}
            </div>
            <div>
              {`Date: ${props.date}`}
            </div>
            <div>
              {`Mailing campaign status id: ${props.mailingCampaignStatusId}`}
            </div>
            <div>
              {`Message template id: ${props.messageTemplateId}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListMailingCampaignsWidget: FC<ListMailingCampaignsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListMailingCampaignsItem,
  ...rest
}) => {
  return (
    <ListWidget<MailingCampaign>
      {...rest}
      source='mailingCampaigns'
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
          $filter: MailingCampaignFilter,
        ) {
          allMailingCampaigns(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
            mailingTypeId
            priority
            date
            mailingCampaignStatusId
            messageTemplateId
          }
        }
      `}
      resultToValue={result => result?.allMailingCampaigns}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListMailingCampaignsWidget;
