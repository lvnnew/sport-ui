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
import {MailingMessageFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountMailingMessagesWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: MailingMessageFilter;
}

const CountMailingMessagesWidget: FC<CountMailingMessagesWidgetProps> = ({
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
