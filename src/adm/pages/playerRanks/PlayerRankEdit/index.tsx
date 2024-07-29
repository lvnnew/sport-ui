import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultPlayerRankEdit from './DefaultPlayerRankEdit';

const PlayerRankEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultPlayerRankEdit {...props} />
);

export default PlayerRankEdit;
