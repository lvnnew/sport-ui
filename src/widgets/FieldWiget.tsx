import * as React from 'react';
import {
  FC,
} from 'react';
import {
  useRecordContext,
} from 'react-admin';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import CardWithIcon, {
  CardWithIconProps,
} from './CardWithIcon/CardWithIcon';

export interface FieldWigetProps extends Omit<CardWithIconProps, 'icon'> {
  icon?: FC<any>;
  title?: string;
  measuring?: string;
  source: string;
  defaultValue?: string;
}

const FieldWiget: FC<FieldWigetProps> = (
  {
    source, 
    measuring = '',
    defaultValue = '',
    icon,
    ...rest
  }
  ) => {
  const record = useRecordContext();

  return (
    <CardWithIcon
      {...rest}
      icon={icon || ArrowForwardIosIcon}
      subtitle={String(record[source] || defaultValue) + ' ' + measuring}
    />
  );
};

export default FieldWiget;
