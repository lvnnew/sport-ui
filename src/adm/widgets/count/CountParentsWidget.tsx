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
import {ParentFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountParentsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: ParentFilter;
}

const CountParentsWidget: FC<CountParentsWidgetProps> = ({
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
        query ($filter: ParentFilter) {
          _allParentsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allParentsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountParentsWidget;
