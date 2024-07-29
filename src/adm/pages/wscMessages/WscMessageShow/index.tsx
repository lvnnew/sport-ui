/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultWscMessageShow from './DefaultWscMessageShow';

const WscMessageShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultWscMessageShow {...props} />
);

export default WscMessageShow;
