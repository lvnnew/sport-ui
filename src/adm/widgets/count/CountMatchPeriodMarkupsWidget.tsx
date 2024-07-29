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
import {MatchPeriodMarkupFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountMatchPeriodMarkupsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: MatchPeriodMarkupFilter;
}

const CountMatchPeriodMarkupsWidget: FC<CountMatchPeriodMarkupsWidgetProps> = ({
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
        query ($filter: MatchPeriodMarkupFilter) {
          _allMatchPeriodMarkupsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allMatchPeriodMarkupsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountMatchPeriodMarkupsWidget;
