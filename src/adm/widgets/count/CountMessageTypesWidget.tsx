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
import {MessageTypeFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountMessageTypesWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: MessageTypeFilter;
}

const CountMessageTypesWidget: FC<CountMessageTypesWidgetProps> = ({
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
        query ($filter: MessageTypeFilter) {
          _allMessageTypesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allMessageTypesMeta?.count?.toLocaleString()}
    />
  );
};

export default CountMessageTypesWidget;
