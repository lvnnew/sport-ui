import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultPlayerCompetitionRatingEdit from './DefaultPlayerCompetitionRatingEdit';

const PlayerCompetitionRatingEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultPlayerCompetitionRatingEdit {...props} />
);

export default PlayerCompetitionRatingEdit;
