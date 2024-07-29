import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultWscContactEdit from './DefaultWscContactEdit';

const WscContactEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultWscContactEdit {...props} />
);

export default WscContactEdit;
