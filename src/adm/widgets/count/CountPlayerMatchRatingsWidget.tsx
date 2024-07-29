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
import {PlayerMatchRatingFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountPlayerMatchRatingsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: PlayerMatchRatingFilter;
}

const CountPlayerMatchRatingsWidget: FC<CountPlayerMatchRatingsWidgetProps> = ({
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
        query ($filter: PlayerMatchRatingFilter) {
          _allPlayerMatchRatingsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allPlayerMatchRatingsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountPlayerMatchRatingsWidget;
