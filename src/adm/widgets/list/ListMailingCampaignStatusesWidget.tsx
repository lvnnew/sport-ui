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
  MailingCampaignStatus,
  QueryAllMailingCampaignStatusesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListMailingCampaignStatusesWidgetProps extends
Omit<ListWigetProps<MailingCampaignStatus>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllMailingCampaignStatusesArgs {
  children?: FC<MailingCampaignStatus>,
}

export const ListMailingCampaignStatusesItem: FC<MailingCampaignStatus> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/mailingCampaignStatuses/${props.id}/show`}
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

const ListMailingCampaignStatusesWidget: FC<ListMailingCampaignStatusesWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListMailingCampaignStatusesItem,
  ...rest
}) => {
  return (
    <ListWiget<MailingCampaignStatus>
      {...rest}
      source='mailingCampaignStatuses'
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
          $filter: MailingCampaignStatusFilter,
        ) {
          allMailingCampaignStatuses(
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
      resultToValue={result => result?.allMailingCampaignStatuses}
    >
      {(record) => children(record)}
    </ListWiget>
  );
};

export default ListMailingCampaignStatusesWidget;
