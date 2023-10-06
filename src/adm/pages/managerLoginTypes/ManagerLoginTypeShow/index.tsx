/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultManagerLoginTypeShow from './DefaultManagerLoginTypeShow';

const ManagerLoginTypeShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultManagerLoginTypeShow {...props} />
);

export default ManagerLoginTypeShow;
