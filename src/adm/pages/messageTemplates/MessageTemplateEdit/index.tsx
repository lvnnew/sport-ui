import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultMessageTemplateEdit from './DefaultMessageTemplateEdit';

const MessageTemplateEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultMessageTemplateEdit {...props} />
);

export default MessageTemplateEdit;
