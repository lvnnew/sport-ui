import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultTeamForPlayerEdit from './DefaultTeamForPlayerEdit';

const TeamForPlayerEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultTeamForPlayerEdit {...props} />
);

export default TeamForPlayerEdit;
