import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultUserList from './DefaultUserList';

const UserList: FC<ListProps> = (props: ListProps) => (
  <DefaultUserList {...props} />
);

export default UserList;
