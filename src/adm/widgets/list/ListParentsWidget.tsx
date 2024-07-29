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
  Parent,
  QueryAllParentsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListParentsWidgetProps extends
Omit<ListWidgetProps<Parent>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllParentsArgs {
  children?: FC<Parent>,
}

export const ListParentsItem: FC<Parent> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/parents/${props.id}/show`}
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
              {`Firstname: ${props.firstname}`}
            </div>
            <div>
              {`Lastname: ${props.lastname}`}
            </div>
            <div>
              {`Patronymic: ${props.patronymic}`}
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

const ListParentsWidget: FC<ListParentsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListParentsItem,
  ...rest
}) => {
  return (
    <ListWidget<Parent>
      {...rest}
      source='parents'
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
          $filter: ParentFilter,
        ) {
          allParents(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
            firstname
            lastname
            patronymic
            createdByManagerId
            lastChangedByManagerId
          }
        }
      `}
      resultToValue={result => result?.allParents}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListParentsWidget;
