import React from 'react';
import {
  Login,
} from 'react-admin';
import LoginForm from './LoginForm';

const LoginPage = (props: any) => <Login {...props}><LoginForm /> </Login>;

export default LoginPage;
