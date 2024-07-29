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
import {PlayerForMatchRequestFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountPlayerForMatchRequestsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: PlayerForMatchRequestFilter;
}

const CountPlayerForMatchRequestsWidget: FC<CountPlayerForMatchRequestsWidgetProps> = ({
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
        query ($filter: PlayerForMatchRequestFilter) {
          _allPlayerForMatchRequestsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allPlayerForMatchRequestsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountPlayerForMatchRequestsWidget;
