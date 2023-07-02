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
import {TenantFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountTenantsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: TenantFilter;
}

const CountTenantsWidget: FC<CountTenantsWidgetProps> = ({
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
        query ($filter: TenantFilter) {
          _allTenantsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allTenantsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountTenantsWidget;
