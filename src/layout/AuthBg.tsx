import React from 'react';
import {
  makeStyles,
  createStyles,
} from '@mui/styles';

const useStyles = makeStyles(() => createStyles({
  bg: {
    filter: 'blur(10px)',
    height: '100vh',
    transform: 'scale(1.2)',
  },
  bgWrapper: {
    height: '100vh',
    left: 0,
    overflow: 'hidden',
    position: 'fixed',
    top: 0,
    width: '100vw',
  },
}));

const AuthBg = () => {
  const classes = useStyles();

  return (
    <div className={classes.bgWrapper}>
      <div className={classes.bg} />
    </div>
  );
};

export default AuthBg;
