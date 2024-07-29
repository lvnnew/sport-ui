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
  MatchVideo,
  QueryAllMatchVideosArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListMatchVideosWidgetProps extends
Omit<ListWidgetProps<MatchVideo>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllMatchVideosArgs {
  children?: FC<MatchVideo>,
}

export const ListMatchVideosItem: FC<MatchVideo> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/matchVideos/${props.id}/show`}
    >
      <ListItemText
        primary={
          <>
            <div>
              {`Id: ${props.id}`}
            </div>
            <div>
              {`Video title: ${props.videoTitle}`}
            </div>
            <div>
              {`Video link: ${props.videoLink}`}
            </div>
            <div>
              {`Match id: ${props.matchId}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListMatchVideosWidget: FC<ListMatchVideosWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListMatchVideosItem,
  ...rest
}) => {
  return (
    <ListWidget<MatchVideo>
      {...rest}
      source='matchVideos'
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
          $filter: MatchVideoFilter,
        ) {
          allMatchVideos(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            videoTitle
            videoLink
            matchId
            order
          }
        }
      `}
      resultToValue={result => result?.allMatchVideos}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListMatchVideosWidget;
