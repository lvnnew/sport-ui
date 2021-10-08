/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultDelegationShow from './DefaultDelegationShow';

const DelegationShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultDelegationShow {...props} />
);

export default DelegationShow;
