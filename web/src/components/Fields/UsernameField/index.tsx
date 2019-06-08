import React, { useState } from 'react';
import { Field, FieldProps } from '../Field';

export const UsernameField: React.FC<FieldProps> =
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

    let validateUsername = function(username: string): void {
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
