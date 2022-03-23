import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultTenantList from './DefaultTenantList';

const TenantList: FC<ListProps> = (props: ListProps) => (
  <DefaultTenantList {...props} />
);

export default TenantList;
