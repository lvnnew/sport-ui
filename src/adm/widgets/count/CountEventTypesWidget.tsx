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
import {EventTypeFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountEventTypesWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: EventTypeFilter;
}

const CountEventTypesWidget: FC<CountEventTypesWidgetProps> = ({
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
        query ($filter: EventTypeFilter) {
          _allEventTypesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allEventTypesMeta?.count?.toLocaleString()}
    />
  );
};

export default CountEventTypesWidget;
