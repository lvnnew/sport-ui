/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultMailingMessageStatusShow from './DefaultMailingMessageStatusShow';

const MailingMessageStatusShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultMailingMessageStatusShow {...props} />
);

export default MailingMessageStatusShow;
