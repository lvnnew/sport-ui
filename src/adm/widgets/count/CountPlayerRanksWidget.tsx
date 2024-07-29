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
import {PlayerRankFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountPlayerRanksWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: PlayerRankFilter;
}

const CountPlayerRanksWidget: FC<CountPlayerRanksWidgetProps> = ({
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
        query ($filter: PlayerRankFilter) {
          _allPlayerRanksMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allPlayerRanksMeta?.count?.toLocaleString()}
    />
  );
};

export default CountPlayerRanksWidget;
