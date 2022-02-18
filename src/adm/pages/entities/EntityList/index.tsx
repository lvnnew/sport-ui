import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultEntityList from './DefaultEntityList';

const EntityList: FC<ListProps> = (props: ListProps) => (
  <DefaultEntityList {...props} />
);

export default EntityList;
