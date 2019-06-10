import React, { useState } from 'react';
import Form from '.';
import { Email, Password, Submit } from '../Fields';
import { Link } from 'react-router-dom';

import { submitRequest } from '../../helpers/submitRequest';

const LoginForm: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const payload = {
    email: email,
    password: password,
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email && !password) {
      return console.log("invalid form data");
    }
    console.log(submitRequest(payload));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Email
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Password
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <small>
        <Link
          className="Form-row helper-text"
          to="/"
        >
          Forgot password?
        </Link>
      </small>

      <Submit htmlValue="Log in" />

      <p style={{ color: '#9B9B9B' }}>
        Don't have an Account?&nbsp;
        <Link to="/signup" className="helper-text">
          Create One
        </Link>
      </p>
    </Form>
);}

export default LoginForm;
