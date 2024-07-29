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
import {MatchFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountMatchesWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: MatchFilter;
}

const CountMatchesWidget: FC<CountMatchesWidgetProps> = ({
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
        query ($filter: MatchFilter) {
          _allMatchesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allMatchesMeta?.count?.toLocaleString()}
    />
  );
};

export default CountMatchesWidget;
