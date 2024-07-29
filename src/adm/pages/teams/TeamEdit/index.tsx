import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultTeamEdit from './DefaultTeamEdit';

const TeamEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultTeamEdit {...props} />
);

export default TeamEdit;
