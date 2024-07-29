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
import {PlayerRoleFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountPlayerRolesWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: PlayerRoleFilter;
}

const CountPlayerRolesWidget: FC<CountPlayerRolesWidgetProps> = ({
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
        query ($filter: PlayerRoleFilter) {
          _allPlayerRolesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allPlayerRolesMeta?.count?.toLocaleString()}
    />
  );
};

export default CountPlayerRolesWidget;
