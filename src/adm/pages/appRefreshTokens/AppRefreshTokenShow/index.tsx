/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultAppRefreshTokenShow from './DefaultAppRefreshTokenShow';

const AppRefreshTokenShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultAppRefreshTokenShow {...props} />
);

export default AppRefreshTokenShow;
