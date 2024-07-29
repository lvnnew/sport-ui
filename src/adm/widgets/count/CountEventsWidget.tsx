/* eslint-disable max-len */
import React, {
  FC,
} from 'react';
import NumberWidget, {
  NumberWidgetProps,
} from '../../../widgets/NumberWidget';
import {
  gql,
} from '@apollo/client';
import {EventFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountEventsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: EventFilter;
}

const CountEventsWidget: FC<CountEventsWidgetProps> = ({
  filter,
  ...rest
}) => {
  return (
    <NumberWidget
      measuring='шт'
      {...rest}
      options={{
        variables: {
          filter,
        },
      }}
      request={gql`
        query ($filter: EventFilter) {
          _allEventsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allEventsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountEventsWidget;
