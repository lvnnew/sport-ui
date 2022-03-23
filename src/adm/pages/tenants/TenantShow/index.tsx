/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultTenantShow from './DefaultTenantShow';

const TenantShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultTenantShow {...props} />
);

export default TenantShow;
