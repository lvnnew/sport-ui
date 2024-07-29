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
import {MatchRequestFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountMatchRequestsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: MatchRequestFilter;
}

const CountMatchRequestsWidget: FC<CountMatchRequestsWidgetProps> = ({
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
        query ($filter: MatchRequestFilter) {
          _allMatchRequestsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allMatchRequestsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountMatchRequestsWidget;
