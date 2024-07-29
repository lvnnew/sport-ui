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
  Competition,
  QueryAllCompetitionsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListCompetitionsWidgetProps extends
Omit<ListWidgetProps<Competition>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllCompetitionsArgs {
  children?: FC<Competition>,
}

export const ListCompetitionsItem: FC<Competition> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/competitions/${props.id}/show`}
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
              {`Date of birth from: ${props.dateOfBirthFrom}`}
            </div>
            <div>
              {`Date of birth to: ${props.dateOfBirthTo}`}
            </div>
            <div>
              {`Organization id: ${props.organizationId}`}
            </div>
            <div>
              {`Created by manager id: ${props.createdByManagerId}`}
            </div>
            <div>
              {`Last changed by manager id: ${props.lastChangedByManagerId}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListCompetitionsWidget: FC<ListCompetitionsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListCompetitionsItem,
  ...rest
}) => {
  return (
    <ListWidget<Competition>
      {...rest}
      source='competitions'
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
          $filter: CompetitionFilter,
        ) {
          allCompetitions(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
            dateOfBirthFrom
            dateOfBirthTo
            organizationId
            createdByManagerId
            lastChangedByManagerId
          }
        }
      `}
      resultToValue={result => result?.allCompetitions}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListCompetitionsWidget;
