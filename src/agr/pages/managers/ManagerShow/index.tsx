/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultManagerShow from './DefaultManagerShow';

const ManagerShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultManagerShow {...props} />
);

export default ManagerShow;
