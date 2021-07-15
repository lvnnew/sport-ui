import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultManagerEdit from './DefaultManagerEdit';

const ManagerEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultManagerEdit {...props} />
);

export default ManagerEdit;
