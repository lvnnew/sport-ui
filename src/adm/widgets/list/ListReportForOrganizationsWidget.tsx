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
  ReportForOrganization,
  QueryAllReportForOrganizationsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListReportForOrganizationsWidgetProps extends
Omit<ListWidgetProps<ReportForOrganization>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllReportForOrganizationsArgs {
  children?: FC<ReportForOrganization>,
}

export const ListReportForOrganizationsItem: FC<ReportForOrganization> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/reportForOrganizations/${props.id}/show`}
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
              {`Competition id: ${props.competitionId}`}
            </div>
            <div>
              {`Organizator id: ${props.organizatorId}`}
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

const ListReportForOrganizationsWidget: FC<ListReportForOrganizationsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListReportForOrganizationsItem,
  ...rest
}) => {
  return (
    <ListWidget<ReportForOrganization>
      {...rest}
      source='reportForOrganizations'
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
          $filter: ReportForOrganizationFilter,
        ) {
          allReportForOrganizations(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
            competitionId
            organizatorId
            lastUpdated
            paid
          }
        }
      `}
      resultToValue={result => result?.allReportForOrganizations}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListReportForOrganizationsWidget;
