/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultClubShow from './DefaultClubShow';

const ClubShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultClubShow {...props} />
);

export default ClubShow;
