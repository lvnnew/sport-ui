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
import {AuditLogFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountAuditLogsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: AuditLogFilter;
}

const CountAuditLogsWidget: FC<CountAuditLogsWidgetProps> = ({
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
        query ($filter: AuditLogFilter) {
          _allAuditLogsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allAuditLogsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountAuditLogsWidget;
