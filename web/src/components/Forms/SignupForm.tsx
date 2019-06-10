import React, { useState } from 'react';
import Form from '.';
import * as Field from '../Fields';
import { Link } from 'react-router-dom';

import { submitRequest } from '../../helpers/submitRequest';

const SignupForm: React.FC = (): JSX.Element => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  const payload = {
    username: username,
    email: email,
    password: password,
    password_confirmation: passwordConfirmation
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
      <Field.Password
        matchError={
          (password === passwordConfirmation) ?
            "" :
            `Password doesn't match`
        }
        value={passwordConfirmation}
        onChange={e => setPasswordConfirmation(e.target.value)}
      />

      <Field.Submit htmlValue="Sign up" />

      <p style={{ color: '#9B9B9B' }}>
        Have an Account?&nbsp;
        <Link to="/login" className="helper-text">
          Log in
        </Link>
        &nbsp;please
      </p>
    </Form>
);}

export default SignupForm;
