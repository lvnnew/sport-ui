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
import {FileFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountFilesWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: FileFilter;
}

const CountFilesWidget: FC<CountFilesWidgetProps> = ({
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
