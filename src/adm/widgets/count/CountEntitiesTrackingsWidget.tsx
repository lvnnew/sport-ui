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
import {EntitiesTrackingFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountEntitiesTrackingsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: EntitiesTrackingFilter;
}

const CountEntitiesTrackingsWidget: FC<CountEntitiesTrackingsWidgetProps> = ({
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
        query ($filter: EntitiesTrackingFilter) {
          _allEntitiesTrackingsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allEntitiesTrackingsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountEntitiesTrackingsWidget;
