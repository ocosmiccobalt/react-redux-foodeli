import Rating from '../../UI/Rating/Rating.jsx';
import Picture from '../../UI/Picture/Picture.jsx';
import classes from './PopularProduct.module.scss';

const ITALIAN_PIZZA_PIC = {
  srcName: 'product-small-italian-pizza',
  size: {
    width: 113,
    height: 97
  },
  noMedia: true,
  alt: 'Italian pizza on orange background.'
};

function PopularProduct({
  className = '',
  title = 'Italian Pizza',
  href = '#italian-pizza-page-content',
  rating = 4.8,
  price = 7.49,
  pic = ITALIAN_PIZZA_PIC
}) {
  const productTitle = (
    <h2 className={classes.popular__title}>
      <a
        className={classes.popular__link}
        href={href}
      >
        {title}
      </a>
    </h2>
  );

  const productRating = (
    <Rating
      className={classes.popular__rating}
      value={rating}
      valueTextIsVisible={false}
      large={false}
    />
  );

  const productPrice = (
    <p className={classes.popular__price}>
      <span className={classes.popular__currency}>$</span>
      {price}
    </p>
  );

  const info = (
    <div className={classes.popular__info}>
      {productTitle}
      {productRating}
      {productPrice}
    </div>
  );

  const illustration = (
    <p className={classes.popular__illustration}>
      <Picture
        srcName={pic.srcName}
        size={pic.size}
        noMedia={pic.noMedia}
        alt={pic.alt}
        imgClassName={classes.popular__image}
      />
    </p>
  );

  return (
    <article className={`${className} ${classes.popular}`}>
      {info}
      {illustration}
    </article>
  );
}

export default PopularProduct;
