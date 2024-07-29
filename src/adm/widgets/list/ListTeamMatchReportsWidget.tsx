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
  TeamMatchReport,
  QueryAllTeamMatchReportsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListTeamMatchReportsWidgetProps extends
Omit<ListWidgetProps<TeamMatchReport>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllTeamMatchReportsArgs {
  children?: FC<TeamMatchReport>,
}

export const ListTeamMatchReportsItem: FC<TeamMatchReport> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/teamMatchReports/${props.id}/show`}
    >
      <ListItemText
        primary={
          <>
            <div>
              {`Id: ${props.id}`}
            </div>
            <div>
              {`Created: ${props.created}`}
            </div>
            <div>
              {`Match id: ${props.matchId}`}
            </div>
            <div>
              {`Last updated: ${props.lastUpdated}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListTeamMatchReportsWidget: FC<ListTeamMatchReportsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListTeamMatchReportsItem,
  ...rest
}) => {
  return (
    <ListWidget<TeamMatchReport>
      {...rest}
      source='teamMatchReports'
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
          $filter: TeamMatchReportFilter,
        ) {
          allTeamMatchReports(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            created
            matchId
            lastUpdated
            fileId
            needRecalculate
          }
        }
      `}
      resultToValue={result => result?.allTeamMatchReports}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListTeamMatchReportsWidget;
