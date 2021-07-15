import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultManagerLoginEdit from './DefaultManagerLoginEdit';

const ManagerLoginEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultManagerLoginEdit {...props} />
);

export default ManagerLoginEdit;
