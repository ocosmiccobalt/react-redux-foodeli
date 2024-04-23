import classes from './Button.module.scss';

function Button({
  className = '',
  modifiers = [],
  type,
  onClick,
  disabled,
  children
}) {
  const subClasses = modifiers.map((m) => classes['button--' + m]);
  const fullClassName = [
    className,
    classes.button,
    ...subClasses
  ].join(' ');

  return (
    <button
      className={fullClassName}
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
