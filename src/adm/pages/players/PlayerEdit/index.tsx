import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultPlayerEdit from './DefaultPlayerEdit';

const PlayerEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultPlayerEdit {...props} />
);

export default PlayerEdit;
