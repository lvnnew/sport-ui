import * as React from 'react';
import {useState} from 'react';
import {useLocation} from 'react-router-dom';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CircularProgress,
  Typography,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import {
  Form,
  required,
  TextInput,
  useTranslate,
  useLogin,
  useNotify,
} from 'react-admin';
import Box from '@mui/material/Box';
import AuthBg from './AuthBg';

interface FormValues {
  username?: string;
  password?: string;
}

const Login = () => {
  const [loading, setLoading] = useState(false);
  const translate = useTranslate();

  const notify = useNotify();
  const login = useLogin();
  const location = useLocation();

  const handleSubmit = (auth: FormValues) => {
    setLoading(true);
    login(
      auth,
      location.state ? (location.state as any).nextPathname : '/',
    ).catch((error: Error) => {
      setLoading(false);
      notify(
        typeof error === 'string' ?
          error :
          (typeof error === 'undefined' || !error.message ?
            'ra.auth.sign_in_error' :
            error.message),
        {
          type: 'warning',
          messageArgs: {
            _:
              typeof error === 'string' ?
                error :
                (error && error.message ?
                  error.message :
                  undefined),
          },
        },
      );
    });
  };

  return (
    <>
      <AuthBg />
      <Form onSubmit={handleSubmit} noValidate>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Card sx={{
            minWidth: 300,
            marginTop: '6em',
            zIndex: theme => theme.zIndex.modal,
          }}
          >
            <Box
              sx={{
                margin: '1em',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Avatar sx={{bgcolor: 'secondary.main'}}>
                <LockIcon />
              </Avatar>
            </Box>
            <Typography
              sx={{
                marginTop: '1em',
                display: 'flex',
                justifyContent: 'center',
                color: theme => theme.palette.grey[500],
              }}
            >
              Login: admin@example.com
            </Typography>
            <Typography
              sx={{
                marginTop: '1em',
                display: 'flex',
                justifyContent: 'center',
                color: theme => theme.palette.grey[500],
              }}
            >
              Pass: admin
            </Typography>
            <Box sx={{padding: '0 1em 1em 1em'}}>
              <Box sx={{marginTop: '1em'}}>
                <TextInput
                  autoFocus
                  source='email'
                  label={translate('ra.auth.username')}
                  disabled={loading}
                  validate={required()}
                  fullWidth
                />
              </Box>
              <Box sx={{marginTop: '1em'}}>
                <TextInput
                  source='password'
                  label={translate('ra.auth.password')}
                  type='password'
                  disabled={loading}
                  validate={required()}
                  fullWidth
                />
              </Box>
            </Box>
            <CardActions sx={{padding: '0 1em 1em 1em'}}>
              <Button
                variant='contained'
                type='submit'
                color='primary'
                disabled={loading}
                fullWidth
              >
                {loading && (
                  <CircularProgress size={25} thickness={2} />
                )}
                {translate('ra.auth.sign_in')}
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Form>
    </>
  );
};

export default Login;
