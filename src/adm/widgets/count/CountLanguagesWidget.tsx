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
import {LanguageFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountLanguagesWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: LanguageFilter;
}

const CountLanguagesWidget: FC<CountLanguagesWidgetProps> = ({
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
        query ($filter: LanguageFilter) {
          _allLanguagesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allLanguagesMeta?.count?.toLocaleString()}
    />
  );
};

export default CountLanguagesWidget;
