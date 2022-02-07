/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultAdmRefreshTokenShow from './DefaultAdmRefreshTokenShow';

const AdmRefreshTokenShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultAdmRefreshTokenShow {...props} />
);

export default AdmRefreshTokenShow;
