import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultClubList from './DefaultClubList';

const ClubList: FC<ListProps> = (props: ListProps) => (
  <DefaultClubList {...props} />
);

export default ClubList;
