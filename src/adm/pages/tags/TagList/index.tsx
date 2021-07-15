import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultTagList from './DefaultTagList';

const TagList: FC<ListProps> = (props: ListProps) => (
  <DefaultTagList {...props} />
);

export default TagList;
