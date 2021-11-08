import React, {
  FC,
  memo,
} from 'react';
import {
  makeStyles,
} from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => {
  return {
    progress: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -32,
      marginLeft: -32,
    },
  };
});

const Loader: FC = memo(() => {
  const mc = useStyles();

  return (
    <CircularProgress className={mc.progress} size={64} />
  );
});

export default Loader;
