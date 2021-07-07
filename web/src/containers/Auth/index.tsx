import React from 'react';
import './styles.css';

interface IProps {
  formHelpText?: any
  children: any
  title: string
}

const Auth: React.FC<IProps> =
  (props: IProps): JSX.Element => {
    return (
      <div className="Auth-container">
        <h3 className="Form-heading">
          {props.title}
        </h3>

        {props.children}
        {props.formHelpText}
      </div>
);}

export default Auth;
