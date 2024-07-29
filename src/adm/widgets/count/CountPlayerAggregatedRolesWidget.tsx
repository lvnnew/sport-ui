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
import {PlayerAggregatedRoleFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountPlayerAggregatedRolesWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: PlayerAggregatedRoleFilter;
}

const CountPlayerAggregatedRolesWidget: FC<CountPlayerAggregatedRolesWidgetProps> = ({
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
        query ($filter: PlayerAggregatedRoleFilter) {
          _allPlayerAggregatedRolesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allPlayerAggregatedRolesMeta?.count?.toLocaleString()}
    />
  );
};

export default CountPlayerAggregatedRolesWidget;
