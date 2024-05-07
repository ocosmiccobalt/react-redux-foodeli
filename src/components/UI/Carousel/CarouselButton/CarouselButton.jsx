import Button from '../../Button.jsx';
import classes from '../../Button.module.scss';

function CarouselButton({
  className,
  prev,
  ariaControls,
  ariaDisabled,
  onClick
}) {
  const ariaLabel = prev ? 'Previous Slide' : 'Next Slide';
  const iconXlinkHref = '#icon-arrow-' + (prev ? 'left' : 'right');
  const iconClassName = `${
    classes.button__icon
  } ${
    classes['button__icon--carousel']
  }`;

  return (
    <Button
      className={className}
      modifiers={['carousel']}
      ariaLabel={ariaLabel}
      ariaControls={ariaControls}
      ariaDisabled={ariaDisabled}
      onClick={onClick}
    >
      <svg
        className={iconClassName}
        width='24'
        height='24'
        aria-hidden='true'
        focusable='false'
      >
        <use xlinkHref={iconXlinkHref}></use>
      </svg>
    </Button>
  );
}

export default CarouselButton;
