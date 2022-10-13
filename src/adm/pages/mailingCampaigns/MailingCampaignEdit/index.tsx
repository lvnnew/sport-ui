import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultMailingCampaignEdit from './DefaultMailingCampaignEdit';

const MailingCampaignEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultMailingCampaignEdit {...props} />
);

export default MailingCampaignEdit;
