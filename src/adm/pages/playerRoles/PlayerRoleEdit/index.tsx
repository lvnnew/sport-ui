import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultPlayerRoleEdit from './DefaultPlayerRoleEdit';

const PlayerRoleEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultPlayerRoleEdit {...props} />
);

export default PlayerRoleEdit;
