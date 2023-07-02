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
import {FileFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountFilesWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: FileFilter;
}

const CountFilesWidget: FC<CountFilesWidgetProps> = ({
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
        query ($filter: FileFilter) {
          _allFilesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allFilesMeta?.count?.toLocaleString()}
    />
  );
};

export default CountFilesWidget;
