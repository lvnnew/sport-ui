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
import {AppLoginFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountAppLoginsWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: AppLoginFilter;
}

const CountAppLoginsWidget: FC<CountAppLoginsWidgetProps> = ({
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
        query ($filter: AppLoginFilter) {
          _allAppLoginsMeta(filter: $filter) {
            count
          }
        }`}
      resultToValue={result => result?._allAppLoginsMeta?.count}
    />
  );
};

export default CountAppLoginsWidget;
