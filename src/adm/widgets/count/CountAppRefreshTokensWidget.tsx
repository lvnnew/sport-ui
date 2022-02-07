/* eslint-disable max-len */
import React, {
  FC,
} from 'react';
import NumberWiget, {
  NumberWigetProps,
} from '../../../widgets/NumberWiget';
import {
  gql,
} from '@apollo/client';
import {AppRefreshTokenFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountAppRefreshTokensWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: AppRefreshTokenFilter;
}

const CountAppRefreshTokensWidget: FC<CountAppRefreshTokensWidgetProps> = ({
  filter,
  ...rest
}) => {
  return (
    <NumberWiget
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
      resultToValue={result => result?._allAppRefreshTokensMeta?.count}
    />
  );
};

export default CountAppRefreshTokensWidget;
