/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultMatchStatusShow from './DefaultMatchStatusShow';

const MatchStatusShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultMatchStatusShow {...props} />
);

export default MatchStatusShow;
