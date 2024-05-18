import classes from './Rating.module.scss';

const HOST = '/';

const STAR = {
  filledStarSrc: HOST + 'img/' + 'icon-filled-star.svg',
  emptyStarSrc: HOST + 'img/' + 'icon-empty-star.svg',
  width: 25,
  height: 25
};

function Rating({
  className = '',
  value = 4.8,
  valueTextIsVisible = true,
  large = true
}) {
  const roundedValue = Math.floor(value);

  const starClassName = large ?
    `${classes.rating__icon} ${classes['rating__icon--large']}` :
    classes.rating__icon;

  const stars = [];

  for (let i = 0; i < 5; i++) {
    const alt = (i === 0) ? (roundedValue + ' out of 5') : '';
    const src = (i >= roundedValue) ? STAR.emptyStarSrc : STAR.filledStarSrc;
    const item = (
      <img
        key={i}
        className={starClassName}
        src={src}
        width={STAR.width}
        height={STAR.height}
        alt={alt}
      />
    );
    stars.push(item);
  }

  return (
    <p className={`${className} ${classes.rating}`}>
      <span className='visually-hidden'>Rating: </span>
      {stars}
      {valueTextIsVisible && (
        <span className={classes.rating__value}>
          {value}
        </span>
      )}
    </p>
  );
}

export default Rating;
