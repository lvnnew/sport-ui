import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultFileCreate from './DefaultFileCreate';

const FileCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultFileCreate {...props} />
);

export default FileCreate;
