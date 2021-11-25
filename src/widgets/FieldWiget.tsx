import * as React from 'react';
import {
  FC,
} from 'react';
import {
  useRecordContext,
} from 'react-admin';
import ArrowForwardIosIcon from '@mui/icons/ArrowForwardIos';
import CardWithIcon, {
  CardWithIconProps,
} from './CardWithIcon/CardWithIcon';

export interface FieldWigetProps extends Omit<CardWithIconProps, 'icon'> {
  icon?: FC<any>;
  title?: string;
  measuring?: string;
  source: string;
  defaultValue?: string;
  prepare?: (val: any) => string;
}

const FieldWiget: FC<FieldWigetProps> = (
  {
    source,
    measuring = '',
    defaultValue = '',
    icon,
    prepare,
    ...rest
  },
) => {
  const record = useRecordContext();
  const val = record[source] || defaultValue;
  const prepared = prepare ? prepare(val) : val;

  return (
    <CardWithIcon
      {...rest}
      icon={icon || ArrowForwardIosIcon}
      subtitle={String(prepared) + ' ' + measuring}
    />
  );
};

export default FieldWiget;
