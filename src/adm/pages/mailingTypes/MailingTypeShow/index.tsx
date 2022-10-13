/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultMailingTypeShow from './DefaultMailingTypeShow';

const MailingTypeShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultMailingTypeShow {...props} />
);

export default MailingTypeShow;
