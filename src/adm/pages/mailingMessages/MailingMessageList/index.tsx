import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultMailingMessageList from './DefaultMailingMessageList';

const MailingMessageList: FC<ListProps> = (props: ListProps) => (
  <DefaultMailingMessageList {...props} />
);

export default MailingMessageList;
