/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultMatchVideoShow from './DefaultMatchVideoShow';

const MatchVideoShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultMatchVideoShow {...props} />
);

export default MatchVideoShow;
