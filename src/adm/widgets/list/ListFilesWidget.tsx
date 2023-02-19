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
  File,
  QueryAllFilesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListFilesWidgetProps extends
Omit<ListWigetProps<File>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllFilesArgs {
  children?: FC<File>,
}

export const ListFilesItem: FC<File> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/files/${props.id}/show`}
    >
      <ListItemText
        primary={
          <>
            <div>
              {`Id: ${props.id}`}
            </div>
            <div>
              {`Original name: ${props.originalName}`}
            </div>
            <div>
              {`Mimetype: ${props.mimetype}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListFilesWidget: FC<ListFilesWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListFilesItem,
  ...rest
}) => {
  return (
    <ListWiget<File>
      {...rest}
      source='files'
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
          $filter: FileFilter,
        ) {
          allFiles(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            originalName
            url
            mimetype
            s3Key
            eTag
            bytes
          }
        }
      `}
      resultToValue={result => result?.allFiles}
    >
      {(record) => children(record)}
    </ListWiget>
  );
};

export default ListFilesWidget;
