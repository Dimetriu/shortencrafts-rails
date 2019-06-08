import React, { lazy } from 'react';
import Auth from '.';

const Signup: React.FC = () => {
  return (
    <Auth title="Sign up">
      <SignupForm />
    </Auth>
  );
}

const SignupForm = lazy(() => import('../../components/Forms/SignupForm'))

export default Signup;
