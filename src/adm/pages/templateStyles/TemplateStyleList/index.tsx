import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultTemplateStyleList from './DefaultTemplateStyleList';

const TemplateStyleList: FC<ListProps> = (props: ListProps) => (
  <DefaultTemplateStyleList {...props} />
);

export default TemplateStyleList;
