import Picture from '../UI/Picture/Picture.jsx';
import classes from './Customers.module.scss';

const LINK = {
  name: 'Our Happy Customer',
  href: '#reviewers-page-content'
};

const HOST = '/';
const RATING = {
  starSrc: HOST + 'img/' + 'icon-filled-star.svg',
  starWidth: 18,
  starHeight: 18,
  starAlt: 'How many stars did they rate us with:',
  value: 4.8,
  amount: '(12.5k Review)'
};

const AVATARS = ['avatar-theresa-jordan', 'avatar-customer-2', 'avatar-customer-3'];
const AVATAR_PIC = {
  oldType: 'png',
  size: {
    width: 64,
    height: 64
  },
  noMedia: true,
  alt: 'Avatars of our customers.'
};

function Customers({ className = '' }) {
  const title = (
    <h2 className={classes.customers__title}>
      <a
        className={classes.customers__link}
        href={LINK.href}
      >
        {LINK.name}
      </a>
    </h2>
  );

  const rating = (
    <p className={classes.customers__rating}>
      <span className={classes.customers__star}>
        <img
          className={classes.customers__icon}
          src={RATING.starSrc}
          width={RATING.starWidth}
          height={RATING.starHeight}
          alt={RATING.starAlt}
        />
      </span>
      <span className={classes.customers__value}>
        {RATING.value}
        {' '}
      </span>
      <span className={classes.customers__amount}>
        {RATING.amount}
      </span>
    </p>
  );

  const avatars = AVATARS.map((avatar, i) => (
    <span
      key={avatar}
      className={classes.customers__avatar}
    >
      <Picture
        srcName={avatar}
        oldType={AVATAR_PIC.oldType}
        size={AVATAR_PIC.size}
        noMedia={AVATAR_PIC.noMedia}
        alt={i === 0 ? AVATAR_PIC.alt : ''}
        imgClassName={classes.customers__image}
      />
    </span>
  ));

  const illustration = (
    <p className={classes.customers__illustration}>
      {avatars}
    </p>
  );

  return (
    <article className={`${className} ${classes.customers}`}>
      {title}
      {rating}
      {illustration}
    </article>
  );
}

export default Customers;
