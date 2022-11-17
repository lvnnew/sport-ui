import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultMailingCampaignStatusList from './DefaultMailingCampaignStatusList';

const MailingCampaignStatusList: FC<ListProps> = (props: ListProps) => (
  <DefaultMailingCampaignStatusList {...props} />
);

export default MailingCampaignStatusList;
