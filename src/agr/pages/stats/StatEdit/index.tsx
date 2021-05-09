import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultStatEdit from './DefaultStatEdit';

const StatEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultStatEdit {...props} />
);

export default StatEdit;
