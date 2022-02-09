import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultMessageTypeList from './DefaultMessageTypeList';

const MessageTypeList: FC<ListProps> = (props: ListProps) => (
  <DefaultMessageTypeList {...props} />
);

export default MessageTypeList;
