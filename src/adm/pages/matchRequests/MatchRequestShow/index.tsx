/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultMatchRequestShow from './DefaultMatchRequestShow';

const MatchRequestShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultMatchRequestShow {...props} />
);

export default MatchRequestShow;
