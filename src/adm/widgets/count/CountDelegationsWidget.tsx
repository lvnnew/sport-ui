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
import {DelegationFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountDelegationsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: DelegationFilter;
}

const CountDelegationsWidget: FC<CountDelegationsWidgetProps> = ({
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
        query ($filter: DelegationFilter) {
          _allDelegationsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allDelegationsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountDelegationsWidget;
