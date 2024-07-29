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
import {WscContactFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountWscContactsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: WscContactFilter;
}

const CountWscContactsWidget: FC<CountWscContactsWidgetProps> = ({
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
        query ($filter: WscContactFilter) {
          _allWscContactsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allWscContactsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountWscContactsWidget;
