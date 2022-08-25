import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultTemplateStyleEdit from './DefaultTemplateStyleEdit';

const TemplateStyleEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultTemplateStyleEdit {...props} />
);

export default TemplateStyleEdit;
