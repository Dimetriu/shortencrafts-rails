import React, { useState } from 'react';
import { Field, FieldProps } from '../Field';

export const EmailField: React.FC<FieldProps> =
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

    let validateEmail = function(email: string): void {
      let re: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
