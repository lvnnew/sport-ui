import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultOrganizatorEdit from './DefaultOrganizatorEdit';

const OrganizatorEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultOrganizatorEdit {...props} />
);

export default OrganizatorEdit;
