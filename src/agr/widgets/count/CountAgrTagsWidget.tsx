import React, {
  FC,
} from 'react';
import NumberWiget, {
  NumberWigetProps,
} from '../../../widgets/NumberWiget';
import {
  gql,
} from '@apollo/client';
import {AgrTagFilter} from '../../../generated/graphql';

interface CountAgrTagsWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: AgrTagFilter;
}

const CountAgrTagsWidget: FC<CountAgrTagsWidgetProps> = ({
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
        query ($filter: AgrTagFilter) {
          _allAgrTagsMeta(filter: $filter) {
            count
          }
        }`}
      resultToValue={result => result?._allAgrTagsMeta?.count}
    />
  );
};

export default CountAgrTagsWidget;
