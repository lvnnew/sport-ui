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
import {EventTypeCategoryFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountEventTypeCategoriesWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: EventTypeCategoryFilter;
}

const CountEventTypeCategoriesWidget: FC<CountEventTypeCategoriesWidgetProps> = ({
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
        query ($filter: EventTypeCategoryFilter) {
          _allEventTypeCategoriesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allEventTypeCategoriesMeta?.count?.toLocaleString()}
    />
  );
};

export default CountEventTypeCategoriesWidget;
