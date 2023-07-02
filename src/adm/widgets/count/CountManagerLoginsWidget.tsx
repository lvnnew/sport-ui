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
import {ManagerLoginFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountManagerLoginsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: ManagerLoginFilter;
}

const CountManagerLoginsWidget: FC<CountManagerLoginsWidgetProps> = ({
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
        query ($filter: ManagerLoginFilter) {
          _allManagerLoginsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allManagerLoginsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountManagerLoginsWidget;
