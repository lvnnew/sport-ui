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
import {TemplateStyleFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountTemplateStylesWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: TemplateStyleFilter;
}

const CountTemplateStylesWidget: FC<CountTemplateStylesWidgetProps> = ({
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
        query ($filter: TemplateStyleFilter) {
          _allTemplateStylesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allTemplateStylesMeta?.count?.toLocaleString()}
    />
  );
};

export default CountTemplateStylesWidget;
