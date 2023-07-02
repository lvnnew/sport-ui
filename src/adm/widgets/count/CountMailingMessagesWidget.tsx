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
import {MailingMessageFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountMailingMessagesWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: MailingMessageFilter;
}

const CountMailingMessagesWidget: FC<CountMailingMessagesWidgetProps> = ({
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
        query ($filter: MailingMessageFilter) {
          _allMailingMessagesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allMailingMessagesMeta?.count?.toLocaleString()}
    />
  );
};

export default CountMailingMessagesWidget;
