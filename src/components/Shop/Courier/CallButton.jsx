import Button from '../../UI/Button/Button.jsx';
import ButtonIcon from '../../UI/Button/ButtonIcon.jsx';

function CallButton({ className = '' }) {
  return (
    <Button
      className={className}
      modifiers={['call']}
      ariaLabel='Call now'
    >
      <ButtonIcon
        modifier='call'
        width='13'
        height='18'
      />
    </Button>
  );
}

export default CallButton;
