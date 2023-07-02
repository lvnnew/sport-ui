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
import {AppRefreshTokenFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountAppRefreshTokensWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: AppRefreshTokenFilter;
}

const CountAppRefreshTokensWidget: FC<CountAppRefreshTokensWidgetProps> = ({
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
        query ($filter: AppRefreshTokenFilter) {
          _allAppRefreshTokensMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allAppRefreshTokensMeta?.count?.toLocaleString()}
    />
  );
};

export default CountAppRefreshTokensWidget;
