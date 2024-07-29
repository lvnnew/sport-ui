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
import {MatchStatusFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountMatchStatusesWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: MatchStatusFilter;
}

const CountMatchStatusesWidget: FC<CountMatchStatusesWidgetProps> = ({
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
        query ($filter: MatchStatusFilter) {
          _allMatchStatusesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allMatchStatusesMeta?.count?.toLocaleString()}
    />
  );
};

export default CountMatchStatusesWidget;
