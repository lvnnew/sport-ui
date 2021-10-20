/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultMessageTemplateShow from './DefaultMessageTemplateShow';

const MessageTemplateShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultMessageTemplateShow {...props} />
);

export default MessageTemplateShow;
