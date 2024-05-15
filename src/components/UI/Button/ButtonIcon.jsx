import classes from './Button.module.scss';

function ButtonIcon({
  modifier = '',
  width,
  height,
  xlinkHref
}) {
  const className = [
    classes.button__icon,
    classes['button__icon--' + modifier]
  ].join(' ');

  const xlinkHrefProp = xlinkHref ?
    xlinkHref :
    '#icon-' + modifier;

  return (
    <svg
      className={className}
      width={width}
      height={height}
      aria-hidden='true'
      focusable='false'
    >
      <use xlinkHref={xlinkHrefProp}></use>
    </svg>
  );
}

export default ButtonIcon;
