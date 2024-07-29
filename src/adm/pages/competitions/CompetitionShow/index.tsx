/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultCompetitionShow from './DefaultCompetitionShow';

const CompetitionShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultCompetitionShow {...props} />
);

export default CompetitionShow;
