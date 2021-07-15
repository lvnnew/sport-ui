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
  Admin,
} from '../../../generated/graphql';
import {QueryAllAdminsArgs} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListAdminsWidgetProps extends
Omit<ListWigetProps<Admin>, 'request' | 'resultToValue'| 'children'>,
QueryAllAdminsArgs {
  children?: FC<Admin>,
}

export const ListAdminsItem: FC<Admin> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/admins/${props.id}/show`}
    >
      <ListItemText
        primary={
          <>
            <div>
              {`Id: ${props.id}`}
            </div>
            <div>
              {`Lastname: ${props.lastname}`}
            </div>
            <div>
              {`Firstname: ${props.firstname}`}
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

const ListAdminsWidget: FC<ListAdminsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListAdminsItem,
  ...rest
}) => {
  return (
    <ListWiget<Admin>
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
          $filter: AdminFilter,
        ) {
          allAdmins(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            lastname
            firstname
            email
          }
        }
      `}
      resultToValue={result => result?.allAdmins}
    >
      {(record) => children(record)}
    </ListWiget>
  );
};

export default ListAdminsWidget;
