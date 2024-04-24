import Button from './Button.jsx';
import classes from './Button.module.scss';

function LoginButton({ className = '' }) {
  return (
    <Button
      className={className}
      modifiers={['login']}
    >
      <svg
        className={`${classes.button__icon} ${classes['button__icon--login']}`}
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
