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
  Manager,
  QueryAllManagersArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListManagersWidgetProps extends
Omit<ListWigetProps<Manager>, 'request' | 'resultToValue'| 'children'>,
QueryAllManagersArgs {
  children?: FC<Manager>,
}

export const ListManagersItem: FC<Manager> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/managers/${props.id}/show`}
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
              {`Last name: ${props.lastName}`}
            </div>
            <div>
              {`First name: ${props.firstName}`}
            </div>
            <div>
              {`Language id: ${props.languageId}`}
            </div>
            <div>
              {`Email: ${props.email}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListManagersWidget: FC<ListManagersWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListManagersItem,
  ...rest
}) => {
  return (
    <ListWiget<Manager>
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
          $filter: ManagerFilter,
        ) {
          allManagers(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
            lastName
            firstName
            languageId
            email
          }
        }
      `}
      resultToValue={result => result?.allManagers}
    >
      {(record) => children(record)}
    </ListWiget>
  );
};

export default ListManagersWidget;
