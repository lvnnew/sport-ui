import * as React from 'react';
import {
  FC, memo,
} from 'react';
import {
  makeStyles,
} from '@material-ui/core/styles';

import {
  FieldProps,
} from 'react-admin';
import AvatarField from './AvatarField';
import {
  Customer,
} from '../../types';

const useStyles = makeStyles(theme => ({
  avatar: {
    marginBottom: -theme.spacing(0.5),
    marginRight: theme.spacing(1),
    marginTop: -theme.spacing(0.5),
  },
  root: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'nowrap',
  },
}));

interface Props extends FieldProps<Customer> {
    size?: string;
}

const FullNameField: FC<Props> = ({record, size}) => {
  const classes = useStyles();

  return record ? (
    <div className={classes.root}>
      <AvatarField
        className={classes.avatar}
        record={record}
        size={size}
      />
      {record.first_name} {record.last_name}
    </div>
  ) : null;
};

FullNameField.defaultProps = {
  label: 'resources.customers.fields.name',
  source: 'last_name',
};

export default memo<Props>(FullNameField);
