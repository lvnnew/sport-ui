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
  PeriodType,
  QueryAllPeriodTypesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListPeriodTypesWidgetProps extends
Omit<ListWidgetProps<PeriodType>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllPeriodTypesArgs {
  children?: FC<PeriodType>,
}

export const ListPeriodTypesItem: FC<PeriodType> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/periodTypes/${props.id}/show`}
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
              {`Order: ${props.order}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListPeriodTypesWidget: FC<ListPeriodTypesWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListPeriodTypesItem,
  ...rest
}) => {
  return (
    <ListWidget<PeriodType>
      {...rest}
      source='periodTypes'
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
          $filter: PeriodTypeFilter,
        ) {
          allPeriodTypes(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
            order
          }
        }
      `}
      resultToValue={result => result?.allPeriodTypes}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListPeriodTypesWidget;
