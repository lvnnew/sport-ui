import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultMessageTemplateList from './DefaultMessageTemplateList';

const MessageTemplateList: FC<ListProps> = (props: ListProps) => (
  <DefaultMessageTemplateList {...props} />
);

export default MessageTemplateList;
