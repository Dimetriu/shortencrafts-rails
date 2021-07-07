import React, { lazy } from 'react';
import Auth from '.';

const Login: React.FC = () => {
  return (
    <Auth title="Log in">
      <LoginForm />
    </Auth>
  );
}

const LoginForm = lazy(() => import('../../components/Forms/LoginForm'))

export default Login;
