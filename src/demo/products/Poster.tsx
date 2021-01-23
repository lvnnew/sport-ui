import * as React from 'react';
import {
  FC,
} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
  content: {'&:last-child': {padding: 0}, padding: 0},
  img: {
    maxHeight: '15em',
    maxWidth: '42em',
    minWidth: 'initial',
    width: 'initial',
  },
  root: {display: 'inline-block', marginTop: '1em', zIndex: 2},
});

const Poster: FC<FieldProps<Product>> = ({record}) => {
  const classes = useStyles();

  if (!record) {
    return null;
  }

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <img alt='' className={classes.img} src={record.image} />
      </CardContent>
    </Card>
  );
};

export default Poster;
