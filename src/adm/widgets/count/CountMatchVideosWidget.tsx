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
import {MatchVideoFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountMatchVideosWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: MatchVideoFilter;
}

const CountMatchVideosWidget: FC<CountMatchVideosWidgetProps> = ({
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
        query ($filter: MatchVideoFilter) {
          _allMatchVideosMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allMatchVideosMeta?.count?.toLocaleString()}
    />
  );
};

export default CountMatchVideosWidget;
