/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultMessageTypeShow from './DefaultMessageTypeShow';

const MessageTypeShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultMessageTypeShow {...props} />
);

export default MessageTypeShow;
