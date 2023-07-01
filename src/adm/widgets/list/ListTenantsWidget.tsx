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
  Tenant,
  QueryAllTenantsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListTenantsWidgetProps extends
Omit<ListWidgetProps<Tenant>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllTenantsArgs {
  children?: FC<Tenant>,
}

export const ListTenantsItem: FC<Tenant> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/tenants/${props.id}/show`}
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
              {`Utc offset: ${props.utcOffset}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListTenantsWidget: FC<ListTenantsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListTenantsItem,
  ...rest
}) => {
  return (
    <ListWidget<Tenant>
      {...rest}
      source='tenants'
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
          $filter: TenantFilter,
        ) {
          allTenants(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
            utcOffset
          }
        }
      `}
      resultToValue={result => result?.allTenants}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListTenantsWidget;
