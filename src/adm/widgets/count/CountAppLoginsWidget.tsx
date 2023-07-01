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
import {AppLoginFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountAppLoginsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: AppLoginFilter;
}

const CountAppLoginsWidget: FC<CountAppLoginsWidgetProps> = ({
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
        query ($filter: AppLoginFilter) {
          _allAppLoginsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allAppLoginsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountAppLoginsWidget;
