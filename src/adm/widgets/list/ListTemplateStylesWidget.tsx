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
  TemplateStyle,
  QueryAllTemplateStylesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListTemplateStylesWidgetProps extends
Omit<ListWigetProps<TemplateStyle>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllTemplateStylesArgs {
  children?: FC<TemplateStyle>,
}

export const ListTemplateStylesItem: FC<TemplateStyle> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/templateStyles/${props.id}/show`}
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
              {`Style: ${props.style}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListTemplateStylesWidget: FC<ListTemplateStylesWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListTemplateStylesItem,
  ...rest
}) => {
  return (
    <ListWiget<TemplateStyle>
      {...rest}
      source='templateStyles'
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
          $filter: TemplateStyleFilter,
        ) {
          allTemplateStyles(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
            style
          }
        }
      `}
      resultToValue={result => result?.allTemplateStyles}
    >
      {(record) => children(record)}
    </ListWiget>
  );
};

export default ListTemplateStylesWidget;
