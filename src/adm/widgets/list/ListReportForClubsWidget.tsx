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
  ReportForClub,
  QueryAllReportForClubsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListReportForClubsWidgetProps extends
Omit<ListWidgetProps<ReportForClub>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllReportForClubsArgs {
  children?: FC<ReportForClub>,
}

export const ListReportForClubsItem: FC<ReportForClub> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/reportForClubs/${props.id}/show`}
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
              {`Team id: ${props.teamId}`}
            </div>
            <div>
              {`Competition id: ${props.competitionId}`}
            </div>
            <div>
              {`Club id: ${props.clubId}`}
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

const ListReportForClubsWidget: FC<ListReportForClubsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListReportForClubsItem,
  ...rest
}) => {
  return (
    <ListWidget<ReportForClub>
      {...rest}
      source='reportForClubs'
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
          $filter: ReportForClubFilter,
        ) {
          allReportForClubs(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
            teamId
            competitionId
            clubId
            lastUpdated
            paid
          }
        }
      `}
      resultToValue={result => result?.allReportForClubs}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListReportForClubsWidget;
