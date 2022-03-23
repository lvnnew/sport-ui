import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultTenantCreate from './DefaultTenantCreate';

const TenantCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultTenantCreate {...props} />
);

export default TenantCreate;
