/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultMatchPeriodMarkupShow from './DefaultMatchPeriodMarkupShow';

const MatchPeriodMarkupShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultMatchPeriodMarkupShow {...props} />
);

export default MatchPeriodMarkupShow;
