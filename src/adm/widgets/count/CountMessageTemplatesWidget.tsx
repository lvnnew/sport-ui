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
import {MessageTemplateFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountMessageTemplatesWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: MessageTemplateFilter;
}

const CountMessageTemplatesWidget: FC<CountMessageTemplatesWidgetProps> = ({
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
        query ($filter: MessageTemplateFilter) {
          _allMessageTemplatesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allMessageTemplatesMeta?.count?.toLocaleString()}
    />
  );
};

export default CountMessageTemplatesWidget;
