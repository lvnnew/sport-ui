import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultMatchStatusEdit from './DefaultMatchStatusEdit';

const MatchStatusEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultMatchStatusEdit {...props} />
);

export default MatchStatusEdit;
