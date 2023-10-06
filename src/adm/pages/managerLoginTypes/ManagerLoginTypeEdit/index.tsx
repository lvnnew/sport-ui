import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultManagerLoginTypeEdit from './DefaultManagerLoginTypeEdit';

const ManagerLoginTypeEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultManagerLoginTypeEdit {...props} />
);

export default ManagerLoginTypeEdit;
