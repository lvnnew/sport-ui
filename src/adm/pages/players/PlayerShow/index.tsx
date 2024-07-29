/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultPlayerShow from './DefaultPlayerShow';

const PlayerShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultPlayerShow {...props} />
);

export default PlayerShow;
