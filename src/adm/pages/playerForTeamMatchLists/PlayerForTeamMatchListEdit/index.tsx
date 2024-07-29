import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultPlayerForTeamMatchListEdit from './DefaultPlayerForTeamMatchListEdit';

const PlayerForTeamMatchListEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultPlayerForTeamMatchListEdit {...props} />
);

export default PlayerForTeamMatchListEdit;
