import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultClubEdit from './DefaultClubEdit';

const ClubEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultClubEdit {...props} />
);

export default ClubEdit;
