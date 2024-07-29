import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultCompetitionList from './DefaultCompetitionList';

const CompetitionList: FC<ListProps> = (props: ListProps) => (
  <DefaultCompetitionList {...props} />
);

export default CompetitionList;
