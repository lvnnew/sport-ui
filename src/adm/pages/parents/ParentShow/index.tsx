/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultParentShow from './DefaultParentShow';

const ParentShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultParentShow {...props} />
);

export default ParentShow;
