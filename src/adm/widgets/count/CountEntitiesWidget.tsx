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
import {EntityFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountEntitiesWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: EntityFilter;
}

const CountEntitiesWidget: FC<CountEntitiesWidgetProps> = ({
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
