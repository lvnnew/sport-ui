import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultDelegationEdit from './DefaultDelegationEdit';

const DelegationEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultDelegationEdit {...props} />
);

export default DelegationEdit;
