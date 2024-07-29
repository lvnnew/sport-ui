import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultPlayerForCompetitionTeamEdit from './DefaultPlayerForCompetitionTeamEdit';

const PlayerForCompetitionTeamEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultPlayerForCompetitionTeamEdit {...props} />
);

export default PlayerForCompetitionTeamEdit;
