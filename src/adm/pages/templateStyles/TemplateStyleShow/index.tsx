/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultTemplateStyleShow from './DefaultTemplateStyleShow';

const TemplateStyleShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultTemplateStyleShow {...props} />
);

export default TemplateStyleShow;
