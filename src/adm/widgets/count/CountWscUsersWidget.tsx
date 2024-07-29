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
import {WscUserFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountWscUsersWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: WscUserFilter;
}

const CountWscUsersWidget: FC<CountWscUsersWidgetProps> = ({
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
        query ($filter: WscUserFilter) {
          _allWscUsersMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allWscUsersMeta?.count?.toLocaleString()}
    />
  );
};

export default CountWscUsersWidget;
