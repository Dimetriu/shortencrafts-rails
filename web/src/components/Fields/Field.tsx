import React from 'react';
import './Field.css';

interface IProps {
  hintText?: string
  hintVariant?: string
  htmlValue?: string
  inputVariant?: string
  label?: string
  labelVariantBefore?: string
  labelVariantAfter?: string
  name: string
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  type: string
  value?: string
  wrapperVariant?: string
}

export interface FieldProps {
  matchError?: string
  error?: string
  htmlValue?: string
  value: string
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
}

export const Field: React.FC<IProps> = (props: IProps) => {

  const field = (
    <input
      type={props.type}
      className={props.inputVariant || "Form-input"}
      onChange={props.onChange}
      onBlur={props.onBlur}
      value={
        props.type === "submit" ?
          props.htmlValue :
          props.value
      }
    />
  );

  const floatingLabel = (
    <label
      className={
        props.value
        ?
        (props.labelVariantAfter || "Form-row-label label-after")
        :
        (props.labelVariantBefore || "Form-row-label label-before")
      }
    >
      {props.label}
    </label>
  );

  return (
    <div className={props.wrapperVariant || "Form-row"}>
      {floatingLabel}
      {field}

      <small className={props.hintVariant || "Form-row-hint standard-hint"}>
        <i>{props.hintText}</i>
      </small>
    </div>
);}
