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
  Event,
  QueryAllEventsArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListEventsWidgetProps extends
Omit<ListWidgetProps<Event>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllEventsArgs {
  children?: FC<Event>,
}

export const ListEventsItem: FC<Event> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/events/${props.id}/show`}
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
              {`Time second: ${props.timeSecond}`}
            </div>
            <div>
              {`Link to time second: ${props.linkToTimeSecond}`}
            </div>
            <div>
              {`Controversial point: ${props.controversialPoint}`}
            </div>
            <div>
              {`Start controversial point: ${props.startControversialPoint}`}
            </div>
            <div>
              {`Highlight: ${props.highlight}`}
            </div>
            <div>
              {`Start highlight: ${props.startHighlight}`}
            </div>
            <div>
              {`Order: ${props.order}`}
            </div>
            <div>
              {`Event type id: ${props.eventTypeId}`}
            </div>
            <div>
              {`Video id: ${props.videoId}`}
            </div>
            <div>
              {`Team for competition id: ${props.teamForCompetitionId}`}
            </div>
            <div>
              {`Main player id: ${props.mainPlayerId}`}
            </div>
            <div>
              {`Second player id: ${props.secondPlayerId}`}
            </div>
            <div>
              {`First player role id: ${props.firstPlayerRoleId}`}
            </div>
            <div>
              {`Second player role id: ${props.secondPlayerRoleId}`}
            </div>
            <div>
              {`Period type id: ${props.periodTypeId}`}
            </div>
            <div>
              {`Match id: ${props.matchId}`}
            </div>
            <div>
              {`Points: ${props.points}`}
            </div>
            <div>
              {`Period number: ${props.periodNumber}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListEventsWidget: FC<ListEventsWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListEventsItem,
  ...rest
}) => {
  return (
    <ListWidget<Event>
      {...rest}
      source='events'
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
          $filter: EventFilter,
        ) {
          allEvents(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            date
            timeSecond
            linkToTimeSecond
            controversialPoint
            startControversialPoint
            highlight
            startHighlight
            order
            eventTypeId
            videoId
            teamForCompetitionId
            mainPlayerId
            secondPlayerId
            firstPlayerRoleId
            secondPlayerRoleId
            periodTypeId
            matchId
            points
            periodNumber
          }
        }
      `}
      resultToValue={result => result?.allEvents}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListEventsWidget;
