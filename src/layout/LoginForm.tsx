/* eslint-disable no-console */
import React, {
  useEffect,
} from 'react';
import {
  connect,
} from 'react-redux';
import {
  userLogin as userLoginAction,
} from 'react-admin';
import {
  withStyles, createStyles,
} from '@material-ui/core/styles';
import {CardActions, Button} from '@material-ui/core';

const styles = ({spacing}: any) =>
  createStyles({
    button: {
      width: '100%',
    },
    icon: {
      marginRight: spacing.unit,
    },
  });

const LoginForm = ({userLogin}: any) => {
  useEffect(() => {
    console.log('login form rendered');
    const location = window.location.href;
    const url = new URL(window.location.href);
    const {searchParams} = url;
    const code = searchParams.get('code');
    const state = searchParams.get('state');

    // If code is present, we came back from the provider
    if (code && state) {
      console.log('oauth callback received');
      userLogin({location});
    }
  }, [userLogin]);

  const handleLogin = () => {
    userLogin(); // Do not provide code, just trigger the redirection
  };

  return (
    <div>
      <CardActions>
        <Button
          color='primary'
          onClick={handleLogin}
          type='submit'
          variant='contained'
        >
          Login
        </Button>
      </CardActions>
    </div>
  );
};

const mapDispatchToProps = {
  userLogin: userLoginAction,
};

export default connect(undefined, mapDispatchToProps)(withStyles(styles)(LoginForm));
