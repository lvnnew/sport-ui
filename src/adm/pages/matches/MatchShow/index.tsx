/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultMatchShow from './DefaultMatchShow';

const MatchShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultMatchShow {...props} />
);

export default MatchShow;
