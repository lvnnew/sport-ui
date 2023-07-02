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
import {MailingMessageStatusFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountMailingMessageStatusesWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: MailingMessageStatusFilter;
}

const CountMailingMessageStatusesWidget: FC<CountMailingMessageStatusesWidgetProps> = ({
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
