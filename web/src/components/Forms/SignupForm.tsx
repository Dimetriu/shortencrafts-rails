import React, { useState } from 'react';
import Form from '.';
import * as Field from '../Fields';
import { Link } from 'react-router-dom';

import { submitRequest } from '../../helpers/submitRequest';

const SignupForm: React.FC = (): JSX.Element => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const payload = {
    username: username,
    email: email,
    password: password,
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(submitRequest(payload));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Field.Username
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <Field.Email
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Field.Password
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
    </Form>
);}

export default SignupForm;
