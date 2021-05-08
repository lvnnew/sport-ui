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
import {AdminLoginFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountAdminLoginsWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: AdminLoginFilter;
}

const CountAdminLoginsWidget: FC<CountAdminLoginsWidgetProps> = ({
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
        query ($filter: AdminLoginFilter) {
          _allAdminLoginsMeta(filter: $filter) {
            count
          }
        }`}
      resultToValue={result => result?._allAdminLoginsMeta?.count}
    />
  );
};

export default CountAdminLoginsWidget;
