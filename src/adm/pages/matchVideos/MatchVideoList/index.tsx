import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultMatchVideoList from './DefaultMatchVideoList';

const MatchVideoList: FC<ListProps> = (props: ListProps) => (
  <DefaultMatchVideoList {...props} />
);

export default MatchVideoList;
