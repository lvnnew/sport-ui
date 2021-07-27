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
import {LanguageFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountLanguagesWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: LanguageFilter;
}

const CountLanguagesWidget: FC<CountLanguagesWidgetProps> = ({
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
        query ($filter: LanguageFilter) {
          _allLanguagesMeta(filter: $filter) {
            count
          }
        }`}
      resultToValue={result => result?._allLanguagesMeta?.count}
    />
  );
};

export default CountLanguagesWidget;
