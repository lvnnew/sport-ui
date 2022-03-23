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
import {TenantFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountTenantsWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: TenantFilter;
}

const CountTenantsWidget: FC<CountTenantsWidgetProps> = ({
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
        query ($filter: TenantFilter) {
          _allTenantsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allTenantsMeta?.count}
    />
  );
};

export default CountTenantsWidget;
