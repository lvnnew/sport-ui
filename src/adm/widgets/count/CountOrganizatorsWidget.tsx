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
import {OrganizatorFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountOrganizatorsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: OrganizatorFilter;
}

const CountOrganizatorsWidget: FC<CountOrganizatorsWidgetProps> = ({
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
        query ($filter: OrganizatorFilter) {
          _allOrganizatorsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allOrganizatorsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountOrganizatorsWidget;
