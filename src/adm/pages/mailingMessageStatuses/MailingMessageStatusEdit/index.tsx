import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultMailingMessageStatusEdit from './DefaultMailingMessageStatusEdit';

const MailingMessageStatusEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultMailingMessageStatusEdit {...props} />
);

export default MailingMessageStatusEdit;
