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
import {GlossaryFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountGlossariesWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: GlossaryFilter;
}

const CountGlossariesWidget: FC<CountGlossariesWidgetProps> = ({
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
        query ($filter: GlossaryFilter) {
          _allGlossariesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allGlossariesMeta?.count?.toLocaleString()}
    />
  );
};

export default CountGlossariesWidget;
