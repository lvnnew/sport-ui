import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultAppRefreshTokenEdit from './DefaultAppRefreshTokenEdit';

const AppRefreshTokenEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultAppRefreshTokenEdit {...props} />
);

export default AppRefreshTokenEdit;
