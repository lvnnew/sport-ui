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
  Unit,
  QueryAllUnitsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListUnitsWidgetProps extends
Omit<ListWigetProps<Unit>, 'request' | 'resultToValue'| 'children'>,
QueryAllUnitsArgs {
  children?: FC<Unit>,
}

export const ListUnitsItem: FC<Unit> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/units/${props.id}/show`}
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
              {`Parent id: ${props.parentId}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListUnitsWidget: FC<ListUnitsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListUnitsItem,
  ...rest
}) => {
  return (
    <ListWiget<Unit>
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
          $filter: UnitFilter,
        ) {
          allUnits(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
            parentId
          }
        }
      `}
      resultToValue={result => result?.allUnits}
    >
      {(record) => children(record)}
    </ListWiget>
  );
};

export default ListUnitsWidget;
