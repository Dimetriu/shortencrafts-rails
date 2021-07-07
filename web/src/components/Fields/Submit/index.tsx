import React from 'react';
import { Field } from '../Field';

export const Submit = (props: { htmlValue: string }) => {
  return (
    <Field
      name="submit"
      type="submit"
      inputVariant="Form-action Primary-btn"
      wrapperVariant="Form-row"
      htmlValue={props.htmlValue}
    />
);}
