import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultOrganizatorList from './DefaultOrganizatorList';

const OrganizatorList: FC<ListProps> = (props: ListProps) => (
  <DefaultOrganizatorList {...props} />
);

export default OrganizatorList;
