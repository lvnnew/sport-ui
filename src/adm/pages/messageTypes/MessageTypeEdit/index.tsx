import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultMessageTypeEdit from './DefaultMessageTypeEdit';

const MessageTypeEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultMessageTypeEdit {...props} />
);

export default MessageTypeEdit;
