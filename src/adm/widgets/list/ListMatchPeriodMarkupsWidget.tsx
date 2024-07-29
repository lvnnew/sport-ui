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
  MatchPeriodMarkup,
  QueryAllMatchPeriodMarkupsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListMatchPeriodMarkupsWidgetProps extends
Omit<ListWidgetProps<MatchPeriodMarkup>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllMatchPeriodMarkupsArgs {
  children?: FC<MatchPeriodMarkup>,
}

export const ListMatchPeriodMarkupsItem: FC<MatchPeriodMarkup> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/matchPeriodMarkups/${props.id}/show`}
    >
      <ListItemText
        primary={
          <>
            <div>
              {`Id: ${props.id}`}
            </div>
            <div>
              {`Timestamp: ${props.timestamp}`}
            </div>
            <div>
              {`Period type id: ${props.periodTypeId}`}
            </div>
            <div>
              {`Match video id: ${props.matchVideoId}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListMatchPeriodMarkupsWidget: FC<ListMatchPeriodMarkupsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListMatchPeriodMarkupsItem,
  ...rest
}) => {
  return (
    <ListWidget<MatchPeriodMarkup>
      {...rest}
      source='matchPeriodMarkups'
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
          $filter: MatchPeriodMarkupFilter,
        ) {
          allMatchPeriodMarkups(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            timestamp
            periodTypeId
            matchVideoId
          }
        }
      `}
      resultToValue={result => result?.allMatchPeriodMarkups}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListMatchPeriodMarkupsWidget;
