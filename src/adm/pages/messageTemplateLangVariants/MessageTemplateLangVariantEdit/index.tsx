import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultMessageTemplateLangVariantEdit from './DefaultMessageTemplateLangVariantEdit';

const MessageTemplateLangVariantEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultMessageTemplateLangVariantEdit {...props} />
);

export default MessageTemplateLangVariantEdit;
