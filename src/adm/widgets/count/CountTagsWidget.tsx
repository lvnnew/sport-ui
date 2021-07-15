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
import {TagFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountTagsWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: TagFilter;
}

const CountTagsWidget: FC<CountTagsWidgetProps> = ({
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
        query ($filter: TagFilter) {
          _allTagsMeta(filter: $filter) {
            count
          }
        }`}
      resultToValue={result => result?._allTagsMeta?.count}
    />
  );
};

export default CountTagsWidget;
