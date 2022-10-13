import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultMailingTypeList from './DefaultMailingTypeList';

const MailingTypeList: FC<ListProps> = (props: ListProps) => (
  <DefaultMailingTypeList {...props} />
);

export default MailingTypeList;
