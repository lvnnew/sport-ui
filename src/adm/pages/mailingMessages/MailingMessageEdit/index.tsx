import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultMailingMessageEdit from './DefaultMailingMessageEdit';

const MailingMessageEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultMailingMessageEdit {...props} />
);

export default MailingMessageEdit;
