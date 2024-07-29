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
  EventType,
  QueryAllEventTypesArgs,
} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface ListEventTypesWidgetProps extends
Omit<ListWidgetProps<EventType>, 'request' | 'resultToValue'| 'children' | 'source'>,
QueryAllEventTypesArgs {
  children?: FC<EventType>,
}

export const ListEventTypesItem: FC<EventType> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      key={props.id}
      to={`/eventTypes/${props.id}/show`}
    >
      <ListItemText
        primary={
          <>
            <div>
              {`Title: ${props.title}`}
            </div>
            <div>
              {`Points: ${props.points}`}
            </div>
            <div>
              {`Event type category id: ${props.eventTypeCategoryId}`}
            </div>
            <div>
              {`Order: ${props.order}`}
            </div>
            <div>
              {`Show in translation mode: ${props.showInTranslationMode}`}
            </div>
          </>
        }
      />
    </ListItem>
  );
};

const ListEventTypesWidget: FC<ListEventTypesWidgetProps> = ({
  page = 0,
  perPage = 5,
  sortField,
  sortOrder,
  filter,
  children = ListEventTypesItem,
  ...rest
}) => {
  return (
    <ListWidget<EventType>
      {...rest}
      source='eventTypes'
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
          $filter: EventTypeFilter,
        ) {
          allEventTypes(
            page: $page,
            perPage: $perPage,
            sortField: $sortField,
            sortOrder: $sortOrder,
            filter: $filter
          ) {
            id
            title
            points
            eventTypeCategoryId
            order
            showInTranslationMode
            needForSecondPlayer
            dependsOnPoint
            redCard
            yellowCard
            calculateBlock
            calculateTakeaway
            calculateSelection
            calculateInterseption
            calculateGuardian
            calculatePositionError
            calculateGrossError
            calculatePositiveDribling
            calculateNegativeDribling
            calculatePositiveSgm
            calculateNegativeSgm
            calculatePositiveRgm
            calculateNegativeRgm
            calculateLosses
            calculateGegenPressing
            calculatePressing
            calculateSaveBall
            calculatePositiveTransfer
            calculateNegativeTransfer
            calculateHit
            calculateHitTarget
            calculateCorner
            calculateFoul
            calculateOffside
          }
        }
      `}
      resultToValue={result => result?.allEventTypes}
    >
      {(record) => children(record)}
    </ListWidget>
  );
};

export default ListEventTypesWidget;
