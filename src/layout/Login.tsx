import * as React from 'react';
import {
  useState,
} from 'react';
import {
  Field, withTypes,
} from 'react-final-form';
import {
  useLocation,
} from 'react-router-dom';

import {
  Avatar,
  Button,
  Card,
  CardActions,
  CircularProgress,
  TextField,
} from '@material-ui/core';
import {
  createMuiTheme, makeStyles,
} from '@material-ui/core/styles';
import {
  ThemeProvider,
} from '@material-ui/styles';
import LockIcon from '@material-ui/icons/Lock';
import {
  Notification, useTranslate, useLogin, useNotify,
} from 'react-admin';

import {
  lightTheme,
} from './themes';

const useStyles = makeStyles(theme => ({
  actions: {
    padding: '0 1em 1em 1em',
  },
  avatar: {
    display: 'flex',
    justifyContent: 'center',
    margin: '1em',
  },
  card: {
    marginTop: '6em',
    minWidth: 300,
  },
  form: {
    padding: '0 1em 1em 1em',
  },
  hint: {
    color: theme.palette.grey[500],
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1em',
  },
  icon: {
    backgroundColor: theme.palette.secondary.main,
  },
  input: {
    marginTop: '1em',
  },
  main: {
    alignItems: 'center',
    background: 'url(https://source.unsplash.com/random/1600x900)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    minHeight: '100vh',
  },
}));

const renderInput = ({
  meta: {touched, error} = {error: undefined, touched: false},
  input: {...inputProps},
  ...props
}: React.PropsWithChildren<any>) => (
  <TextField
    error={Boolean(touched && error)}
    helperText={touched && error}
    {...inputProps}
    {...props}
    fullWidth
  />
);

interface FormValues {
    username?: string;
    password?: string;
}

const {Form} = withTypes<FormValues>();

const Login = () => {
  const [loading, setLoading] = useState(false);
  const translate = useTranslate();
  const classes = useStyles();
  const notify = useNotify();
  const login = useLogin();
  const location = useLocation<{ nextPathname: string } | null>();

  const handleSubmit = (auth: FormValues) => {
    setLoading(true);
    login(auth, location.state ? location.state.nextPathname : '/').catch(
      (error: Error) => {
        setLoading(false);
        notify(
          typeof error === 'string' ?
            error :
            typeof error === 'undefined' || !error.message ?
              'ra.auth.sign_in_error' :
              error.message,
          'warning',
        );
      },
    );
  };

  const validate = (values: FormValues) => {
    const errors: FormValues = {};
    if (!values.username) {
      errors.username = translate('ra.validation.required');
    }
    if (!values.password) {
      errors.password = translate('ra.validation.required');
    }

    return errors;
  };

  return (
    <Form
      onSubmit={handleSubmit}
      render={({handleSubmit}) => (
        <form noValidate onSubmit={handleSubmit}>
          <div className={classes.main}>
            <Card className={classes.card}>
              <div className={classes.avatar}>
                <Avatar className={classes.icon}>
                  <LockIcon />
                </Avatar>
              </div>
              <div className={classes.hint}>
                Hint: demo / demo
              </div>
              <div className={classes.form}>
                <div className={classes.input}>
                  <Field
                    autoFocus
                    component={renderInput}

                    // @ts-ignore
                    disabled={loading}
                    label={translate('ra.auth.username')}
                    name='username'
                  />
                </div>
                <div className={classes.input}>
                  <Field
                    component={renderInput}

                    // @ts-ignore
                    disabled={loading}
                    label={translate('ra.auth.password')}
                    name='password'
                    type='password'
                  />
                </div>
              </div>
              <CardActions className={classes.actions}>
                <Button
                  color='primary'
                  disabled={loading}
                  fullWidth
                  type='submit'
                  variant='contained'
                >
                  {loading && (
                    <CircularProgress
                      size={25}
                      thickness={2}
                    />
                  )}
                  {translate('ra.auth.sign_in')}
                </Button>
              </CardActions>
            </Card>
            <Notification />
          </div>
        </form>
      )}
      validate={validate}
    />
  );
};

// We need to put the ThemeProvider decoration in another component
// Because otherwise the useStyles() hook used in Login won't get
// the right theme
const LoginWithTheme = (props: any) => (
  <ThemeProvider theme={createMuiTheme(lightTheme)}>
    <Login {...props} />
  </ThemeProvider>
);

export default LoginWithTheme;
