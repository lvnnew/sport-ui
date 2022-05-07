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
import {AutogenerationHistoryEntryFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountAutogenerationHistoryEntriesWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: AutogenerationHistoryEntryFilter;
}

const CountAutogenerationHistoryEntriesWidget: FC<CountAutogenerationHistoryEntriesWidgetProps> = ({
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
        query ($filter: AutogenerationHistoryEntryFilter) {
          _allAutogenerationHistoryEntriesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allAutogenerationHistoryEntriesMeta?.count?.toLocaleString()}
    />
  );
};

export default CountAutogenerationHistoryEntriesWidget;
