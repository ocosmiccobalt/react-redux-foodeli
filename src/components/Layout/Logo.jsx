import classes from './Logo.module.scss';

function Logo({ className = '' }) {
  return (
    <a
      className={`${className} ${classes.logo}`}
      href='#'
    >
      <img
        className={classes.logo__image}
        src='/img/logo-group.svg'
        width='152'
        height='45'
        fetchPriority='high'
        alt='Foodeli logo.'
      />
    </a>
  );
}

export default Logo;
