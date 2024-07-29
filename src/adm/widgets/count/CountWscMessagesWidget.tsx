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
import {WscMessageFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountWscMessagesWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: WscMessageFilter;
}

const CountWscMessagesWidget: FC<CountWscMessagesWidgetProps> = ({
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
        query ($filter: WscMessageFilter) {
          _allWscMessagesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allWscMessagesMeta?.count?.toLocaleString()}
    />
  );
};

export default CountWscMessagesWidget;
