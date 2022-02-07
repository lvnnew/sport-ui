import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultAdmRefreshTokenEdit from './DefaultAdmRefreshTokenEdit';

const AdmRefreshTokenEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultAdmRefreshTokenEdit {...props} />
);

export default AdmRefreshTokenEdit;
