import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultMailingCampaignCreate from './DefaultMailingCampaignCreate';

const MailingCampaignCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultMailingCampaignCreate {...props} />
);

export default MailingCampaignCreate;
