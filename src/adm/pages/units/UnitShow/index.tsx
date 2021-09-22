/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultUnitShow from './DefaultUnitShow';

const UnitShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultUnitShow {...props} />
);

export default UnitShow;
