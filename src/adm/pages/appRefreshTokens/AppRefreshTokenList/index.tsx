import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultAppRefreshTokenList from './DefaultAppRefreshTokenList';

const AppRefreshTokenList: FC<ListProps> = (props: ListProps) => (
  <DefaultAppRefreshTokenList {...props} />
);

export default AppRefreshTokenList;
