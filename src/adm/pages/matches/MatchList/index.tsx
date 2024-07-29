import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultMatchList from './DefaultMatchList';

const MatchList: FC<ListProps> = (props: ListProps) => (
  <DefaultMatchList {...props} />
);

export default MatchList;
