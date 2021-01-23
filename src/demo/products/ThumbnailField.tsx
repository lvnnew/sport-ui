import * as React from 'react';
import {
  FC,
} from 'react';
import {
  makeStyles,
} from '@material-ui/core/styles';
import {
  FieldProps,
} from 'react-admin';
import {
  Product,
} from '../../types';

const useStyles = makeStyles({
  root: {maxHeight: 25, maxWidth: 25, width: 25},
});

const ThumbnailField: FC<FieldProps<Product>> = ({record}) => {
  const classes = useStyles();

  return record ? (
    <img alt='' className={classes.root} src={record.thumbnail} />
  ) : null;
};

export default ThumbnailField;
