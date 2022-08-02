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
  AutogenerationRule,
  QueryAllAutogenerationRulesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListAutogenerationRulesWidgetProps extends
Omit<ListWigetProps<AutogenerationRule>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllAutogenerationRulesArgs {
  children?: FC<AutogenerationRule>,
}

export const ListAutogenerationRulesItem: FC<AutogenerationRule> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/autogenerationRules/${props.id}/show`}
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
              {`Version: ${props.version}`}
            </div>
            <div>
              {`Original entity type: ${props.originalEntityType}`}
            </div>
            <div>
              {`Generating entity type: ${props.generatingEntityType}`}
            </div>
            <div>
              {`Original entity filter: ${props.originalEntityFilter}`}
            </div>
            <div>
              {`Generating entity construction rules: ${props.generatingEntityConstructionRules}`}
            </div>
            <div>
              {`Ignore version on history: ${props.ignoreVersionOnHistory}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListAutogenerationRulesWidget: FC<ListAutogenerationRulesWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListAutogenerationRulesItem,
  ...rest
}) => {
  return (
    <ListWiget<AutogenerationRule>
      {...rest}
      source='autogenerationRules'
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
          $filter: AutogenerationRuleFilter,
        ) {
          allAutogenerationRules(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
            version
            originalEntityType
            generatingEntityType
            originalEntityFilter
            generatingEntityConstructionRules
            ignoreVersionOnHistory
          }
        }
      `}
      resultToValue={result => result?.allAutogenerationRules}
    >
      {(record) => children(record)}
    </ListWiget>
  );
};

export default ListAutogenerationRulesWidget;
