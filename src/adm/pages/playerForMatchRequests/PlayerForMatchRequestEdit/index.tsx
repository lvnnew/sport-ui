import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultPlayerForMatchRequestEdit from './DefaultPlayerForMatchRequestEdit';

const PlayerForMatchRequestEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultPlayerForMatchRequestEdit {...props} />
);

export default PlayerForMatchRequestEdit;
