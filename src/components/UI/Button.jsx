import { forwardRef, useRef, useImperativeHandle } from 'react';

import classes from './Button.module.scss';

const Button = forwardRef(function Button(
  {
    id,
    index,
    className = '',
    modifiers = [],
    type,
    role, // e.g. role='tab'
    ariaLabel,
    ariaControls,
    ariaDisabled,
    ariaCurrent,
    ariaSelected,
    tabIndex,
    onClick,
    disabled,
    children
  },
  ref
) {
  const buttonRef = useRef();

  useImperativeHandle(ref, () => {
    const button = buttonRef.current;

    return {
      focus: () => button.focus(),
      blur: () => button.blur()
    };
  });

  const subClasses = modifiers.map((m) => classes['button--' + m]);
  const fullClassName = [
    className,
    classes.button,
    ...subClasses
  ].join(' ');

  return (
    <button
      id={id}
      data-index={index}
      className={fullClassName}
      type={type || 'button'}
      role={role}
      aria-label={ariaLabel}
      aria-controls={ariaControls}
      aria-disabled={ariaDisabled}
      aria-current={ariaCurrent}
      aria-selected={ariaSelected}
      tabIndex={tabIndex}
      onClick={onClick}
      disabled={disabled}
      ref={buttonRef}
    >
      {children}
    </button>
  );
});

export default Button;
