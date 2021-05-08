import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultAppLoginEdit from './DefaultAppLoginEdit';

const AppLoginEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultAppLoginEdit {...props} />
);

export default AppLoginEdit;
