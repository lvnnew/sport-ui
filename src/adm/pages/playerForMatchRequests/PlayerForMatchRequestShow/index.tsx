/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultPlayerForMatchRequestShow from './DefaultPlayerForMatchRequestShow';

const PlayerForMatchRequestShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultPlayerForMatchRequestShow {...props} />
);

export default PlayerForMatchRequestShow;
