import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultLanguageList from './DefaultLanguageList';

const LanguageList: FC<ListProps> = (props: ListProps) => (
  <DefaultLanguageList {...props} />
);

export default LanguageList;
