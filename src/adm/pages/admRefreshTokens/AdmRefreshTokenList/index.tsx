import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultAdmRefreshTokenList from './DefaultAdmRefreshTokenList';

const AdmRefreshTokenList: FC<ListProps> = (props: ListProps) => (
  <DefaultAdmRefreshTokenList {...props} />
);

export default AdmRefreshTokenList;
