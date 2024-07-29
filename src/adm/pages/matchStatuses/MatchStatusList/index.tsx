import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultMatchStatusList from './DefaultMatchStatusList';

const MatchStatusList: FC<ListProps> = (props: ListProps) => (
  <DefaultMatchStatusList {...props} />
);

export default MatchStatusList;
