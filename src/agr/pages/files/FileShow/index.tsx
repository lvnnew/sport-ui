/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultFileShow from './DefaultFileShow';

const FileShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultFileShow {...props} />
);

export default FileShow;
