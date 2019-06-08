import React, { useState } from 'react';
import Form from '.';
import * as Field from '../Fields';
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
    console.log(submitRequest(payload));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Field.Email
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Field.Password
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <Link
        className="Form-row"
        to="/"
      >
        Forgot password?
      </Link>

      <Field.Submit htmlValue="Log in" />

      <p style={{ color: '#9B9B9B' }}>
        Don't have an Account?&nbsp;
        <Link to="/signup">
          Create One
        </Link>
      </p>

    </Form>
);}

export default LoginForm;
