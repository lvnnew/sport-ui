import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultTenantEdit from './DefaultTenantEdit';

const TenantEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultTenantEdit {...props} />
);

export default TenantEdit;
