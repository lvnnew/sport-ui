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
import {MailingTypeFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountMailingTypesWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: MailingTypeFilter;
}

const CountMailingTypesWidget: FC<CountMailingTypesWidgetProps> = ({
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
        query ($filter: MailingTypeFilter) {
          _allMailingTypesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allMailingTypesMeta?.count?.toLocaleString()}
    />
  );
};

export default CountMailingTypesWidget;
