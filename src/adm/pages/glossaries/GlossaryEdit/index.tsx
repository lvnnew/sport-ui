import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultGlossaryEdit from './DefaultGlossaryEdit';

const GlossaryEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultGlossaryEdit {...props} />
);

export default GlossaryEdit;
