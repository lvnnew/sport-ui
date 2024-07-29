import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultTeamMatchListEdit from './DefaultTeamMatchListEdit';

const TeamMatchListEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultTeamMatchListEdit {...props} />
);

export default TeamMatchListEdit;
