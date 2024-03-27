import {useEffect} from 'react';
import {useLogin} from 'react-admin';

const LoginPage = () => {
  const login = useLogin();

  useEffect(() => {
    login({});
  }, [login]);

  return null;
};

export default LoginPage;
