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
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListWiget, {
  ListWigetProps,
} from '../../../widgets/ListWiget';
import {
  AutogenerationHistoryEntry,
  QueryAllAutogenerationHistoryEntriesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListAutogenerationHistoryEntriesWidgetProps extends
Omit<ListWigetProps<AutogenerationHistoryEntry>, 'request' | 'resultToValue'| 'children'>,
QueryAllAutogenerationHistoryEntriesArgs {
  children?: FC<AutogenerationHistoryEntry>,
}

export const ListAutogenerationHistoryEntriesItem: FC<AutogenerationHistoryEntry> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/autogenerationHistoryEntries/${props.id}/show`}
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
              {`Original entity type: ${props.originalEntityType}`}
            </div>
            <div>
              {`Original entity id: ${props.originalEntityId}`}
            </div>
            <div>
              {`Autogeneration rule id: ${props.autogenerationRuleId}`}
            </div>
            <div>
              {`Version: ${props.version}`}
            </div>
            <div>
              {`Error occurred: ${props.errorOccurred}`}
            </div>
            <div>
              {`Error: ${props.error}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListAutogenerationHistoryEntriesWidget: FC<ListAutogenerationHistoryEntriesWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListAutogenerationHistoryEntriesItem,
  ...rest
}) => {
  return (
    <ListWiget<AutogenerationHistoryEntry>
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
          $filter: AutogenerationHistoryEntryFilter,
        ) {
          allAutogenerationHistoryEntries(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            date
            originalEntityType
            originalEntityId
            autogenerationRuleId
            version
            errorOccurred
            error
          }
        }
      `}
      resultToValue={result => result?.allAutogenerationHistoryEntries}
    >
      {(record) => children(record)}
    </ListWiget>
  );
};

export default ListAutogenerationHistoryEntriesWidget;
