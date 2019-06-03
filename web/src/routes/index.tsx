import React from 'react';
import { Route } from 'react-router';

const Home: React.FC = () => {
  return <h2>Home</h2>;
}

const Routes: React.FC = () => {
  return (
    <>
      <Route path="/" exact component={Home} />
    </>
  );
}

export default Routes;
