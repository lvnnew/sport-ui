/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultLanguageShow from './DefaultLanguageShow';

const LanguageShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultLanguageShow {...props} />
);

export default LanguageShow;
