/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import CustomManagerShow from './CustomManagerShow';

const ManagerShow: FC<ShowProps> = (props: ShowProps) => (
  <CustomManagerShow {...props} />
);

export default ManagerShow;
