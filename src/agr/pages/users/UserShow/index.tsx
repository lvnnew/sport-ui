/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultUserShow from './DefaultUserShow';

const UserShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultUserShow {...props} />
);

export default UserShow;
