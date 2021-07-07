import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultFileEdit from './DefaultFileEdit';

const FileEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultFileEdit {...props} />
);

export default FileEdit;
