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
import {AuditLogFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountAuditLogsWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: AuditLogFilter;
}

const CountAuditLogsWidget: FC<CountAuditLogsWidgetProps> = ({
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
        query ($filter: AuditLogFilter) {
          _allAuditLogsMeta(filter: $filter) {
            count
          }
        }`}
      resultToValue={result => result?._allAuditLogsMeta?.count}
    />
  );
};

export default CountAuditLogsWidget;
