/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultTagShow from './DefaultTagShow';

const TagShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultTagShow {...props} />
);

export default TagShow;
