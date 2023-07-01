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
import {RolesToPermissionFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountRolesToPermissionsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: RolesToPermissionFilter;
}

const CountRolesToPermissionsWidget: FC<CountRolesToPermissionsWidgetProps> = ({
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
        query ($filter: RolesToPermissionFilter) {
          _allRolesToPermissionsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allRolesToPermissionsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountRolesToPermissionsWidget;
