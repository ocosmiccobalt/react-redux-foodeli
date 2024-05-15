import Button from '../UI/Button/Button.jsx';
import ButtonIcon from '../UI/Button/ButtonIcon.jsx';

function LoginButton({ className = '' }) {
  return (
    <Button
      className={className}
      modifiers={['login']}
    >
      <ButtonIcon
        modifier='login'
        width='16'
        height='16'
      />
      Login
    </Button>
  );
}

export default LoginButton;
