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
import ListWiget, {
  ListWigetProps,
} from '../../../widgets/ListWiget';
import {
  AuditLog,
  QueryAllAuditLogsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListAuditLogsWidgetProps extends
Omit<ListWigetProps<AuditLog>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllAuditLogsArgs {
  children?: FC<AuditLog>,
}

export const ListAuditLogsItem: FC<AuditLog> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/auditLogs/${props.id}/show`}
    >
      <ListItemText
        primary={
          <>
            <div>
              {`Id: ${props.id}`}
            </div>
            <div>
              {`Date: ${props.date}`}
            </div>
            <div>
              {`Title: ${props.title}`}
            </div>
            <div>
              {`Entity type id: ${props.entityTypeId}`}
            </div>
            <div>
              {`Entity id: ${props.entityId}`}
            </div>
            <div>
              {`Action type id: ${props.actionTypeId}`}
            </div>
            <div>
              {`Manager id: ${props.managerId}`}
            </div>
            <div>
              {`User id: ${props.userId}`}
            </div>
            <div>
              {`Foreign: ${props.foreign}`}
            </div>
            <div>
              {`Foreign entity type: ${props.foreignEntityType}`}
            </div>
            <div>
              {`Foreign entity id: ${props.foreignEntityId}`}
            </div>
            <div>
              {`Action data: ${props.actionData}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListAuditLogsWidget: FC<ListAuditLogsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListAuditLogsItem,
  ...rest
}) => {
  return (
    <ListWiget<AuditLog>
      {...rest}
      source='auditLogs'
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
          $filter: AuditLogFilter,
        ) {
          allAuditLogs(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            date
            title
            entityTypeId
            entityId
            actionTypeId
            managerId
            userId
            foreign
            foreignEntityType
            foreignEntityId
            actionData
          }
        }
      `}
      resultToValue={result => result?.allAuditLogs}
    >
      {(record) => children(record)}
    </ListWiget>
  );
};

export default ListAuditLogsWidget;
