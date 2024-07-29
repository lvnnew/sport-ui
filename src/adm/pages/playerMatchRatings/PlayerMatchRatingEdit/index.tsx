import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultPlayerMatchRatingEdit from './DefaultPlayerMatchRatingEdit';

const PlayerMatchRatingEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultPlayerMatchRatingEdit {...props} />
);

export default PlayerMatchRatingEdit;
