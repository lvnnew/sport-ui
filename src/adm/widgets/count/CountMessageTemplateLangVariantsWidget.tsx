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
import {MessageTemplateLangVariantFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountMessageTemplateLangVariantsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: MessageTemplateLangVariantFilter;
}

const CountMessageTemplateLangVariantsWidget: FC<CountMessageTemplateLangVariantsWidgetProps> = ({
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
        query ($filter: MessageTemplateLangVariantFilter) {
          _allMessageTemplateLangVariantsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allMessageTemplateLangVariantsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountMessageTemplateLangVariantsWidget;
