import Button from '../../Button/Button.jsx';
import ButtonIcon from '../../Button/ButtonIcon.jsx';

function CarouselButton({
  className,
  prev,
  ariaControls,
  ariaDisabled,
  onClick
}) {
  const ariaLabel = prev ? 'Previous Slide' : 'Next Slide';
  const iconXlinkHref = '#icon-arrow-' + (prev ? 'left' : 'right');

  return (
    <Button
      className={className}
      modifiers={['carousel']}
      ariaLabel={ariaLabel}
      ariaControls={ariaControls}
      ariaDisabled={ariaDisabled}
      onClick={onClick}
    >
      <ButtonIcon
        modifier='carousel'
        width='24'
        height='24'
        xlinkHref={iconXlinkHref}
      />
    </Button>
  );
}

export default CarouselButton;
