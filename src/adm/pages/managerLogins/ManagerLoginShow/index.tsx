/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultManagerLoginShow from './DefaultManagerLoginShow';

const ManagerLoginShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultManagerLoginShow {...props} />
);

export default ManagerLoginShow;
