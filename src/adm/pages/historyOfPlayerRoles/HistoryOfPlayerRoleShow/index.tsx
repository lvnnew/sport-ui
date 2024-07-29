/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultHistoryOfPlayerRoleShow from './DefaultHistoryOfPlayerRoleShow';

const HistoryOfPlayerRoleShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultHistoryOfPlayerRoleShow {...props} />
);

export default HistoryOfPlayerRoleShow;
