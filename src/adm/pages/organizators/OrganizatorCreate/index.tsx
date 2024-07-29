import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultOrganizatorCreate from './DefaultOrganizatorCreate';

const OrganizatorCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultOrganizatorCreate {...props} />
);

export default OrganizatorCreate;
