import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultParentEdit from './DefaultParentEdit';

const ParentEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultParentEdit {...props} />
);

export default ParentEdit;
