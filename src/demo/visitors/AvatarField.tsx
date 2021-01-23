import * as React from 'react';
import {
  FC,
} from 'react';
import Avatar from '@material-ui/core/Avatar';
import {
  FieldProps,
} from 'react-admin';
import {
  Customer,
} from '../../types';

interface Props extends FieldProps<Customer> {
    className?: string;
    size?: string;
}

const AvatarField: FC<Props> = ({record, size = '25', className}) =>
  (record ? (
    <Avatar
      className={className}
      src={`${record.avatar}?size=${size}x${size}`}
      style={{height: Number.parseInt(size, 10), width: Number.parseInt(size, 10)}}
    />
  ) : null);

export default AvatarField;
