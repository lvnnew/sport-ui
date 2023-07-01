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
import {AggregateTrackingFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountAggregateTrackingsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: AggregateTrackingFilter;
}

const CountAggregateTrackingsWidget: FC<CountAggregateTrackingsWidgetProps> = ({
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
        query ($filter: AggregateTrackingFilter) {
          _allAggregateTrackingsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allAggregateTrackingsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountAggregateTrackingsWidget;
