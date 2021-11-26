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
import {MessageTemplateFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountMessageTemplatesWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: MessageTemplateFilter;
}

const CountMessageTemplatesWidget: FC<CountMessageTemplatesWidgetProps> = ({
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
        query ($filter: MessageTemplateFilter) {
          _allMessageTemplatesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allMessageTemplatesMeta?.count}
    />
  );
};

export default CountMessageTemplatesWidget;
