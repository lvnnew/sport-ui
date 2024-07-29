import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultCompetitionEdit from './DefaultCompetitionEdit';

const CompetitionEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultCompetitionEdit {...props} />
);

export default CompetitionEdit;
