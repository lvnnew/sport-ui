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
import {MessageTypeFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountMessageTypesWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: MessageTypeFilter;
}

const CountMessageTypesWidget: FC<CountMessageTypesWidgetProps> = ({
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
        query ($filter: MessageTypeFilter) {
          _allMessageTypesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allMessageTypesMeta?.count}
    />
  );
};

export default CountMessageTypesWidget;
