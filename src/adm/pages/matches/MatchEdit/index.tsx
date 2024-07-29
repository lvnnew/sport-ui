import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultMatchEdit from './DefaultMatchEdit';

const MatchEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultMatchEdit {...props} />
);

export default MatchEdit;
