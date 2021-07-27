import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultLanguageEdit from './DefaultLanguageEdit';

const LanguageEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultLanguageEdit {...props} />
);

export default LanguageEdit;
