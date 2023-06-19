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
  ConfigurationVariable,
  QueryAllConfigurationVariablesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListConfigurationVariablesWidgetProps extends
Omit<ListWigetProps<ConfigurationVariable>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllConfigurationVariablesArgs {
  children?: FC<ConfigurationVariable>,
}

export const ListConfigurationVariablesItem: FC<ConfigurationVariable> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/configurationVariables/${props.id}/show`}
    >
      <ListItemText
        primary={
          <div>
            {`Id: ${props.id}`}
          </div>
        }
      />
    </ListItem>
  );
};

const ListConfigurationVariablesWidget: FC<ListConfigurationVariablesWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListConfigurationVariablesItem,
  ...rest
}) => {
  return (
    <ListWiget<ConfigurationVariable>
      {...rest}
      source='configurationVariables'
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
          $filter: ConfigurationVariableFilter,
        ) {
          allConfigurationVariables(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            value
          }
        }
      `}
      resultToValue={result => result?.allConfigurationVariables}
    >
      {(record) => children(record)}
    </ListWiget>
  );
};

export default ListConfigurationVariablesWidget;
