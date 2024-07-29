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
  ReportForParent,
  QueryAllReportForParentsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListReportForParentsWidgetProps extends
Omit<ListWidgetProps<ReportForParent>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllReportForParentsArgs {
  children?: FC<ReportForParent>,
}

export const ListReportForParentsItem: FC<ReportForParent> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/reportForParents/${props.id}/show`}
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
              {`Player id: ${props.playerId}`}
            </div>
            <div>
              {`Match id: ${props.matchId}`}
            </div>
            <div>
              {`Parent id: ${props.parentId}`}
            </div>
            <div>
              {`Last updated: ${props.lastUpdated}`}
            </div>
            <div>
              {`Paid: ${props.paid}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListReportForParentsWidget: FC<ListReportForParentsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListReportForParentsItem,
  ...rest
}) => {
  return (
    <ListWidget<ReportForParent>
      {...rest}
      source='reportForParents'
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
          $filter: ReportForParentFilter,
        ) {
          allReportForParents(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
            playerId
            matchId
            parentId
            lastUpdated
            paid
          }
        }
      `}
      resultToValue={result => result?.allReportForParents}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListReportForParentsWidget;
