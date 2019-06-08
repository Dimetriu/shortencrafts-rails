import React, { useState } from 'react';
import { Field, FieldProps } from './Field';

export const Email: React.FC<FieldProps> =
  (props: FieldProps) => {
    const {
      error,
      value,
      onChange
    } = props;

    const [invalidEmailFormat, setInvalidEmailFormat] = useState("");

    const handleBlur = () => {
      validateEmail(value);
    }

    let validateEmail = function (email: string): void {
      let re: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (!re.test(email)) {
        setInvalidEmailFormat("Invalid email format");
      } else {
        setInvalidEmailFormat("");
      }
    }

    return (
      <Field
        inputVariant={
          (error || invalidEmailFormat) &&
          "Form-input Form-input-error"
        }
        label="Email"
        type="email"
        name="email"
        hintText={
          error ||
          invalidEmailFormat ||
          "e.g: example@mail.com"
        }
        hintVariant={
          (error || invalidEmailFormat) &&
          "failure-hint"
        }
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
      />
);}

export const Password: React.FC<FieldProps> =
  (props: FieldProps) => {
    const {
      matchError,
      error,
      value,
      onChange
    } = props;

    const [invalidPasswordLength, setInvalidPasswordLength] = useState("");

    const handleBlur = () => {
      validatePassword(value);
    }

    let validatePassword = function (password: string): void {
      if (password.length < 8) {
        setInvalidPasswordLength("Password is too short");
      } else {
        setInvalidPasswordLength("");
      }
    }

    return (
      <Field
        inputVariant={
          (error || invalidPasswordLength) &&
          "Form-input Form-input-error"
        }
        label="Password"
        type="password"
        name="password"
        hintText={
          error ||
          matchError ||
          invalidPasswordLength ||
          "Minimum 8 characters"
        }
        hintVariant={
          (error || invalidPasswordLength) &&
          "failure-hint"
        }
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
      />
);}

export const Username: React.FC<FieldProps> =
  (props: FieldProps) => {
    const {
      error,
      value,
      onChange
    } = props;

    const [invalidUsername, setInvalidUsername] = useState("");

    const handleBlur = () => {
      validateUsername(value);
    }

    let validateUsername = function (username: string): void {
      if ((username.length < 3) && (username.length > 20)) {
        setInvalidUsername("Username must be between 3 and 20 characters");
      } else {
        setInvalidUsername("");
      }
    }

    return (
      <Field
        inputVariant={
          (error || invalidUsername) &&
          "Form-input Form-input-error"
        }
        label="Username"
        type="text"
        name="username"
        hintText={
          error ||
          invalidUsername ||
          "e.g: JohnDoe"
        }
        hintVariant={
          (error || invalidUsername) &&
          "failure-hint"
        }
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
      />
);}

export const Submit = (props: {htmlValue: string}) => {
  return (
    <Field
      name="submit"
      type="submit"
      inputVariant="Form-submit Primary-btn"
      wrapperVariant="Form-row"
      htmlValue={props.htmlValue}
    />
);}
