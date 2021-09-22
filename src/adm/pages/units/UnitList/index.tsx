import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultUnitList from './DefaultUnitList';

const UnitList: FC<ListProps> = (props: ListProps) => (
  <DefaultUnitList {...props} />
);

export default UnitList;
