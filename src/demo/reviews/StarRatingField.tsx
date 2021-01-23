import * as React from 'react';
import {
  FC,
} from 'react';
import Icon from '@material-ui/icons/Stars';
import {
  makeStyles,
} from '@material-ui/core/styles';

import {
  FieldProps,
} from 'react-admin';

const useStyles = makeStyles({
  large: {
    height: 20,
    width: 20,
  },
  root: {
    display: 'flex',
    opacity: 0.87,
    whiteSpace: 'nowrap',
  },
  small: {
    height: 15,
    width: 15,
  },
});

interface OwnProps {
    size?: 'large' | 'small';
}

const StarRatingField: FC<FieldProps & OwnProps> = ({
  record,
  size = 'large',
}) => {
  const classes = useStyles();

  return record ? (
    <span className={classes.root}>
      {new Array(record.rating)
        .fill(true)
        .map((_, i) => (
          <Icon
            className={
              size === 'large' ? classes.large : classes.small
            }
            key={i}
          />
        ))}
    </span>
  ) : null;
};

StarRatingField.defaultProps = {
  addLabel: true,
  label: 'resources.reviews.fields.rating',
  source: 'rating',
};

export default StarRatingField;
