import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultWscUserEdit from './DefaultWscUserEdit';

const WscUserEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultWscUserEdit {...props} />
);

export default WscUserEdit;
