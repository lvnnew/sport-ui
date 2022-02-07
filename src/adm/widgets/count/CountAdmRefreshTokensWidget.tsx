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
import {AdmRefreshTokenFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountAdmRefreshTokensWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: AdmRefreshTokenFilter;
}

const CountAdmRefreshTokensWidget: FC<CountAdmRefreshTokensWidgetProps> = ({
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
        query ($filter: AdmRefreshTokenFilter) {
          _allAdmRefreshTokensMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allAdmRefreshTokensMeta?.count}
    />
  );
};

export default CountAdmRefreshTokensWidget;
