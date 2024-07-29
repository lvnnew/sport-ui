import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultTeamForCompetitionEdit from './DefaultTeamForCompetitionEdit';

const TeamForCompetitionEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultTeamForCompetitionEdit {...props} />
);

export default TeamForCompetitionEdit;
