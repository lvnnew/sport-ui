/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultMailingMessageShow from './DefaultMailingMessageShow';

const MailingMessageShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultMailingMessageShow {...props} />
);

export default MailingMessageShow;
