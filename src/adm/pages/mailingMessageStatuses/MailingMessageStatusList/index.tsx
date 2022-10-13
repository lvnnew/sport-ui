import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultMailingMessageStatusList from './DefaultMailingMessageStatusList';

const MailingMessageStatusList: FC<ListProps> = (props: ListProps) => (
  <DefaultMailingMessageStatusList {...props} />
);

export default MailingMessageStatusList;
