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
import {MailingMessageStatusFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountMailingMessageStatusesWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: MailingMessageStatusFilter;
}

const CountMailingMessageStatusesWidget: FC<CountMailingMessageStatusesWidgetProps> = ({
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
        query ($filter: MailingMessageStatusFilter) {
          _allMailingMessageStatusesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allMailingMessageStatusesMeta?.count?.toLocaleString()}
    />
  );
};

export default CountMailingMessageStatusesWidget;
