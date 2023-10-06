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
  ManagerLoginType,
  QueryAllManagerLoginTypesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListManagerLoginTypesWidgetProps extends
Omit<ListWidgetProps<ManagerLoginType>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllManagerLoginTypesArgs {
  children?: FC<ManagerLoginType>,
}

export const ListManagerLoginTypesItem: FC<ManagerLoginType> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/managerLoginTypes/${props.id}/show`}
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

const ListManagerLoginTypesWidget: FC<ListManagerLoginTypesWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListManagerLoginTypesItem,
  ...rest
}) => {
  return (
    <ListWidget<ManagerLoginType>
      {...rest}
      source='managerLoginTypes'
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
          $filter: ManagerLoginTypeFilter,
        ) {
          allManagerLoginTypes(
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
      resultToValue={result => result?.allManagerLoginTypes}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListManagerLoginTypesWidget;
