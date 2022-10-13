import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultMailingTypeEdit from './DefaultMailingTypeEdit';

const MailingTypeEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultMailingTypeEdit {...props} />
);

export default MailingTypeEdit;
