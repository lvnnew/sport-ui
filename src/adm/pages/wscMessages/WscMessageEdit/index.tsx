import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultWscMessageEdit from './DefaultWscMessageEdit';

const WscMessageEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultWscMessageEdit {...props} />
);

export default WscMessageEdit;
