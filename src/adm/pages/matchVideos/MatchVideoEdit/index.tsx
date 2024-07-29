import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultMatchVideoEdit from './DefaultMatchVideoEdit';

const MatchVideoEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultMatchVideoEdit {...props} />
);

export default MatchVideoEdit;
