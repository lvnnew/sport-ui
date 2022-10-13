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
import {MailingTypeFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountMailingTypesWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: MailingTypeFilter;
}

const CountMailingTypesWidget: FC<CountMailingTypesWidgetProps> = ({
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
