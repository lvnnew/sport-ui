/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultWscContactShow from './DefaultWscContactShow';

const WscContactShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultWscContactShow {...props} />
);

export default WscContactShow;
