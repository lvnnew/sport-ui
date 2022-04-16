import * as React from 'react';
import {
  FC, useMemo,
} from 'react';
import {
  useRecordContext,
} from 'react-admin';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CardWithIcon, {
  CardWithIconProps,
} from './CardWithIcon/CardWithIcon';

export interface FieldWigetProps extends Omit<CardWithIconProps, 'icon' | 'to'> {
  icon?: FC<any>;
  title?: string;
  measuring?: string;
  source: string;
  defaultValue?: string;
  prepare?: (val: any) => string;
  to?: string | ((field: string) => string);
}

const FieldWiget: FC<FieldWigetProps> = (
  {
    source,
    measuring = '',
    defaultValue,
    icon,
    prepare,
    to,
    ...rest
  },
) => {
  const record = useRecordContext();
  const val = record[source] || defaultValue;
  const prepared = useMemo(() => (prepare ? prepare(val) : val), [prepare, val]);
  const toValue = useMemo(() => (typeof to === 'function' ? to(prepared) : to), [to, prepared]);

  return val ? (
    <CardWithIcon
      {...rest}
      to={toValue}
      icon={icon || ArrowForwardIosIcon}
      subtitle={String(prepared) + ' ' + measuring}
    />
  ) : null;
};

export default FieldWiget;
