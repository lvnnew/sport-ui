import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultHistoryOfPlayerRoleEdit from './DefaultHistoryOfPlayerRoleEdit';

const HistoryOfPlayerRoleEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultHistoryOfPlayerRoleEdit {...props} />
);

export default HistoryOfPlayerRoleEdit;
