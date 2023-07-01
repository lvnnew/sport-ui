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
import {StatFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountStatsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: StatFilter;
}

const CountStatsWidget: FC<CountStatsWidgetProps> = ({
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
        query ($filter: StatFilter) {
          _allStatsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allStatsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountStatsWidget;
