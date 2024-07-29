/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultOrganizatorShow from './DefaultOrganizatorShow';

const OrganizatorShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultOrganizatorShow {...props} />
);

export default OrganizatorShow;
