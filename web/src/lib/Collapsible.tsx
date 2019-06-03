import React, { useState } from 'react';

interface CollapsibleProps {
  buttonVariant?: string
  children?: any
  content: any
  onClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  toggleIcon: JSX.Element
  toggleIconAfter?: JSX.Element
  variant?: string
}

const Collapsible = (props: CollapsibleProps) => {
  const {
    buttonVariant,
    children,
    content,
    onClick,
    toggleIcon,
    toggleIconAfter,
    variant,
  } = props;

  const [Collapse, setCollapse] = useState(false);

  const toggleCollapse = () => {
    setCollapse(Collapse ? false : true);
  }

  return (
    <>
      <div className={variant}>
        {children}

        <button
          onClick={onClick}
          // "ToggleMenu"
          className={buttonVariant}
        >
          {Collapse ? toggleIconAfter : toggleIcon}
        </button>
      </div>

      {Collapse && content}
    </>
  );
}

export default Collapsible;
