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
  Tenant,
  QueryAllTenantsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListTenantsWidgetProps extends
Omit<ListWigetProps<Tenant>, 'request' | 'resultToValue'| 'children'>,
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
    <ListWiget<Tenant>
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
    </ListWiget>
  );
};

export default ListTenantsWidget;
