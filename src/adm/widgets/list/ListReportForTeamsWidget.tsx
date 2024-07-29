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
  ReportForTeam,
  QueryAllReportForTeamsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListReportForTeamsWidgetProps extends
Omit<ListWidgetProps<ReportForTeam>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllReportForTeamsArgs {
  children?: FC<ReportForTeam>,
}

export const ListReportForTeamsItem: FC<ReportForTeam> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/reportForTeams/${props.id}/show`}
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
              {`Title: ${props.title}`}
            </div>
            <div>
              {`Team for competition id: ${props.teamForCompetitionId}`}
            </div>
            <div>
              {`Match id: ${props.matchId}`}
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

const ListReportForTeamsWidget: FC<ListReportForTeamsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListReportForTeamsItem,
  ...rest
}) => {
  return (
    <ListWidget<ReportForTeam>
      {...rest}
      source='reportForTeams'
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
          $filter: ReportForTeamFilter,
        ) {
          allReportForTeams(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            created
            title
            teamForCompetitionId
            matchId
            clubId
            lastUpdated
            paid
            fileId
            htmlFileId
            jsonFileId
            needRecalculate
          }
        }
      `}
      resultToValue={result => result?.allReportForTeams}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListReportForTeamsWidget;
