import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultTagEdit from './DefaultTagEdit';

const TagEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultTagEdit {...props} />
);

export default TagEdit;
