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
import {EntityFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountEntitiesWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: EntityFilter;
}

const CountEntitiesWidget: FC<CountEntitiesWidgetProps> = ({
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
        query ($filter: EntityFilter) {
          _allEntitiesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allEntitiesMeta?.count?.toLocaleString()}
    />
  );
};

export default CountEntitiesWidget;
