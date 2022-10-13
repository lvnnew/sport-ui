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
import {MailingCampaignFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountMailingCampaignsWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: MailingCampaignFilter;
}

const CountMailingCampaignsWidget: FC<CountMailingCampaignsWidgetProps> = ({
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
        query ($filter: MailingCampaignFilter) {
          _allMailingCampaignsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allMailingCampaignsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountMailingCampaignsWidget;
