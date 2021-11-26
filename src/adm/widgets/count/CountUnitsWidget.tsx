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
import {UnitFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountUnitsWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: UnitFilter;
}

const CountUnitsWidget: FC<CountUnitsWidgetProps> = ({
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
        query ($filter: UnitFilter) {
          _allUnitsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allUnitsMeta?.count}
    />
  );
};

export default CountUnitsWidget;
