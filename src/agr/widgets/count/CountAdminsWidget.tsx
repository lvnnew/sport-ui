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
import {AdminFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountAdminsWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: AdminFilter;
}

const CountAdminsWidget: FC<CountAdminsWidgetProps> = ({
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
        query ($filter: AdminFilter) {
          _allAdminsMeta(filter: $filter) {
            count
          }
        }`}
      resultToValue={result => result?._allAdminsMeta?.count}
    />
  );
};

export default CountAdminsWidget;
