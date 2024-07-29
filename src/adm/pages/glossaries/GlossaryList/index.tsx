import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultGlossaryList from './DefaultGlossaryList';

const GlossaryList: FC<ListProps> = (props: ListProps) => (
  <DefaultGlossaryList {...props} />
);

export default GlossaryList;
