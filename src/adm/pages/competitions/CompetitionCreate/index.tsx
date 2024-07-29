import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultCompetitionCreate from './DefaultCompetitionCreate';

const CompetitionCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultCompetitionCreate {...props} />
);

export default CompetitionCreate;
