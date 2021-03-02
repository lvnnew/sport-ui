import React, {
  FC,
} from 'react';
import NumberWiget, {
  NumberWigetProps,
} from '../../../widgets/NumberWiget';
import {
  gql,
} from '@apollo/client';
import {TagFilter} from '../../../generated/graphql';

interface CountTagsWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: TagFilter;
}

const CountTagsWidget: FC<CountTagsWidgetProps> = ({
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
        query ($filter: TagFilter) {
          _allTagsMeta(filter: $filter) {
            count
          }
        }`}
      resultToValue={result => result?._allTagsMeta?.count}
    />
  );
};

export default CountTagsWidget;
