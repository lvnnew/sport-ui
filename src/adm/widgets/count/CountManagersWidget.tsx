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
import {ManagerFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountManagersWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: ManagerFilter;
}

const CountManagersWidget: FC<CountManagersWidgetProps> = ({
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
        query ($filter: ManagerFilter) {
          _allManagersMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allManagersMeta?.count?.toLocaleString()}
    />
  );
};

export default CountManagersWidget;
