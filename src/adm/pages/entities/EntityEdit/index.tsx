import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultEntityEdit from './DefaultEntityEdit';

const EntityEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultEntityEdit {...props} />
);

export default EntityEdit;
