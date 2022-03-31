import React, {FC} from 'react';
import * as Icons from '@material-ui/icons';

export interface IconByNameProps {
  name: keyof typeof Icons;
}

export const IconByName: FC<IconByNameProps> = ({name}) => {
  const Icon = Icons[name];

  return <Icon />;
};
