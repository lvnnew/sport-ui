import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultFileList from './DefaultFileList';

const FileList: FC<ListProps> = (props: ListProps) => (
  <DefaultFileList {...props} />
);

export default FileList;
