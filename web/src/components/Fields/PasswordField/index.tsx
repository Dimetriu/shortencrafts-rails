import React, { useState } from 'react';
import { Field, FieldProps } from '../Field';

export const PasswordField: React.FC<FieldProps> =
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

    let validatePassword = function(password: string): void {
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
