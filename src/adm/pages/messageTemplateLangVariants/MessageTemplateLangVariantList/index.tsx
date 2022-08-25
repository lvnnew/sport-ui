import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultMessageTemplateLangVariantList from './DefaultMessageTemplateLangVariantList';

const MessageTemplateLangVariantList: FC<ListProps> = (props: ListProps) => (
  <DefaultMessageTemplateLangVariantList {...props} />
);

export default MessageTemplateLangVariantList;
