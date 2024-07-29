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
import {PeriodTypeFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountPeriodTypesWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: PeriodTypeFilter;
}

const CountPeriodTypesWidget: FC<CountPeriodTypesWidgetProps> = ({
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
        query ($filter: PeriodTypeFilter) {
          _allPeriodTypesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allPeriodTypesMeta?.count?.toLocaleString()}
    />
  );
};

export default CountPeriodTypesWidget;
