import React from 'react';

interface IProps {
  text: string
}

export const FormHeading: React.FC<IProps> = ({ text }) => {
  return (
    <h3 className="Form-heading">
      {text}
    </h3>
  );
}
