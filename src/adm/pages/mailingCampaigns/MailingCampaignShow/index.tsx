/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultMailingCampaignShow from './DefaultMailingCampaignShow';

const MailingCampaignShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultMailingCampaignShow {...props} />
);

export default MailingCampaignShow;
