import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router';

const Home: React.FC = () => {
  return <h2>Home</h2>;
}

const Routes: React.FC = (): JSX.Element => {
  return (
    <>
      <Route path="/" exact component={Home} />

      <Suspense fallback={<h1>login</h1>}>
        <Route path="/login" component={Login} />
      </Suspense>
      <Suspense fallback={<h1>signup</h1>}>
        <Route path="/signup" component={Signup} />
      </Suspense>
    </>
  );
}

const Login = lazy(() => import('../containers/Auth/Login'))
const Signup = lazy(() => import('../containers/Auth/Signup'))

export default Routes;
