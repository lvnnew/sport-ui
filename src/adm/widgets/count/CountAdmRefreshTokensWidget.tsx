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
import {AdmRefreshTokenFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountAdmRefreshTokensWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: AdmRefreshTokenFilter;
}

const CountAdmRefreshTokensWidget: FC<CountAdmRefreshTokensWidgetProps> = ({
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
        query ($filter: AdmRefreshTokenFilter) {
          _allAdmRefreshTokensMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allAdmRefreshTokensMeta?.count?.toLocaleString()}
    />
  );
};

export default CountAdmRefreshTokensWidget;
