import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultMatchRequestEdit from './DefaultMatchRequestEdit';

const MatchRequestEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultMatchRequestEdit {...props} />
);

export default MatchRequestEdit;
