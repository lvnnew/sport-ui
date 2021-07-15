/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultAppLoginShow from './DefaultAppLoginShow';

const AppLoginShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultAppLoginShow {...props} />
);

export default AppLoginShow;
