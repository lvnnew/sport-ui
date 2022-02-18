/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultEntityShow from './DefaultEntityShow';

const EntityShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultEntityShow {...props} />
);

export default EntityShow;
