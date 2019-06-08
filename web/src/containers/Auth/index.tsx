import React from 'react';
import './styles.css';

const Auth = (props: { title: string, children: any }) => {
  return (
    <div className="Auth-container">
      <h3 className="Form-heading">
        {props.title}
      </h3>

      {props.children}
    </div>
);}

export default Auth;
