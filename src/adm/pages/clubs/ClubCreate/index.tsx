import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultClubCreate from './DefaultClubCreate';

const ClubCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultClubCreate {...props} />
);

export default ClubCreate;
