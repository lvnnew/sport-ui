import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultTeamList from './DefaultTeamList';

const TeamList: FC<ListProps> = (props: ListProps) => (
  <DefaultTeamList {...props} />
);

export default TeamList;
