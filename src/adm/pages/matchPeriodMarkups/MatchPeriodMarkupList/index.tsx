import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultMatchPeriodMarkupList from './DefaultMatchPeriodMarkupList';

const MatchPeriodMarkupList: FC<ListProps> = (props: ListProps) => (
  <DefaultMatchPeriodMarkupList {...props} />
);

export default MatchPeriodMarkupList;
