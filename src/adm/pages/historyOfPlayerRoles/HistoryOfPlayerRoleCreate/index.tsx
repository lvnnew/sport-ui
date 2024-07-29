import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultHistoryOfPlayerRoleCreate from './DefaultHistoryOfPlayerRoleCreate';

const HistoryOfPlayerRoleCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultHistoryOfPlayerRoleCreate {...props} />
);

export default HistoryOfPlayerRoleCreate;
