/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultMessageTemplateLangVariantShow from './DefaultMessageTemplateLangVariantShow';

const MessageTemplateLangVariantShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultMessageTemplateLangVariantShow {...props} />
);

export default MessageTemplateLangVariantShow;
