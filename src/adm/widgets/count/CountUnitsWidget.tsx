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
import {UnitFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountUnitsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: UnitFilter;
}

const CountUnitsWidget: FC<CountUnitsWidgetProps> = ({
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
        query ($filter: UnitFilter) {
          _allUnitsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allUnitsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountUnitsWidget;
