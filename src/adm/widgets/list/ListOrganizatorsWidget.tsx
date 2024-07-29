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
  Organizator,
  QueryAllOrganizatorsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListOrganizatorsWidgetProps extends
Omit<ListWidgetProps<Organizator>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllOrganizatorsArgs {
  children?: FC<Organizator>,
}

export const ListOrganizatorsItem: FC<Organizator> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/organizators/${props.id}/show`}
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
              {`Created by manager id: ${props.createdByManagerId}`}
            </div>
            <div>
              {`Last changed by manager id: ${props.lastChangedByManagerId}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListOrganizatorsWidget: FC<ListOrganizatorsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListOrganizatorsItem,
  ...rest
}) => {
  return (
    <ListWidget<Organizator>
      {...rest}
      source='organizators'
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
          $filter: OrganizatorFilter,
        ) {
          allOrganizators(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
            createdByManagerId
            lastChangedByManagerId
          }
        }
      `}
      resultToValue={result => result?.allOrganizators}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListOrganizatorsWidget;
