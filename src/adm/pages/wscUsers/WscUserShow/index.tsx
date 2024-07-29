/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultWscUserShow from './DefaultWscUserShow';

const WscUserShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultWscUserShow {...props} />
);

export default WscUserShow;
