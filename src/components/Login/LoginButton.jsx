import Button from '../UI/Button.jsx';
import classes from '../UI/Button.module.scss';

function LoginButton({ className = '' }) {
  const iconClassName = `${
    classes.button__icon
  } ${
    classes['button__icon--login']
  }`;

  return (
    <Button
      className={className}
      modifiers={['login']}
    >
      <svg
        className={iconClassName}
        width='16'
        height='16'
        aria-hidden='true'
        focusable='false'
      >
        <use xlinkHref='#icon-login'></use>
      </svg>
      Login
    </Button>
  );
}

export default LoginButton;
