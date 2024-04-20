import classes from './Button.module.scss';

function Button({
  className = '',
  modifier = '',
  type,
  onClick,
  disabled,
  children
}) {
  const subClass = (modifier === '') ? '' : classes['button--' + modifier];

  return (
    <button
      className={`${className} ${classes.button} ${subClass}`}
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
