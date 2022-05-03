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
  AuditLogActionType,
  QueryAllAuditLogActionTypesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListAuditLogActionTypesWidgetProps extends
Omit<ListWigetProps<AuditLogActionType>, 'request' | 'resultToValue'| 'children'>,
QueryAllAuditLogActionTypesArgs {
  children?: FC<AuditLogActionType>,
}

export const ListAuditLogActionTypesItem: FC<AuditLogActionType> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/auditLogActionTypes/${props.id}/show`}
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

const ListAuditLogActionTypesWidget: FC<ListAuditLogActionTypesWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListAuditLogActionTypesItem,
  ...rest
}) => {
  return (
    <ListWiget<AuditLogActionType>
      {...rest}
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
          $filter: AuditLogActionTypeFilter,
        ) {
          allAuditLogActionTypes(
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
      resultToValue={result => result?.allAuditLogActionTypes}
    >
      {(record) => children(record)}
    </ListWiget>
  );
};

export default ListAuditLogActionTypesWidget;
