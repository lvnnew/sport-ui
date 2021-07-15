import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultUserEdit from './DefaultUserEdit';

const UserEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultUserEdit {...props} />
);

export default UserEdit;
