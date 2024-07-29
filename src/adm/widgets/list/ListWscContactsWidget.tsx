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
  WscContact,
  QueryAllWscContactsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListWscContactsWidgetProps extends
Omit<ListWidgetProps<WscContact>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllWscContactsArgs {
  children?: FC<WscContact>,
}

export const ListWscContactsItem: FC<WscContact> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/wscContacts/${props.id}/show`}
    >
      <ListItemText
        primary={
          <>
            <div>
              {`Id: ${props.id}`}
            </div>
            <div>
              {`Name: ${props.name}`}
            </div>
            <div>
              {`Phone number: ${props.phoneNumber}`}
            </div>
            <div>
              {`Wsc user id: ${props.wscUserId}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListWscContactsWidget: FC<ListWscContactsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListWscContactsItem,
  ...rest
}) => {
  return (
    <ListWidget<WscContact>
      {...rest}
      source='wscContacts'
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
          $filter: WscContactFilter,
        ) {
          allWscContacts(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            name
            phoneNumber
            wscUserId
          }
        }
      `}
      resultToValue={result => result?.allWscContacts}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListWscContactsWidget;
