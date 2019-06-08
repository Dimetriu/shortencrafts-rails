import React from 'react';

interface FormProps {
  children: any
  variant?: string
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const Form: React.FC<FormProps> =
  (props: FormProps): JSX.Element => {
    return (
      <form
        className={props.variant || "Form-group-vertical"}
        onSubmit={props.onSubmit}
      >
        {props.children}
      </form>
);}

export default Form;
