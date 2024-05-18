import classes from './ServiceItem.module.scss';

function ServiceItem({
  className = '',
  id: modifier,
  name,
  href,
  description
}) {
  const itemClassName = [
    className,
    classes['service-item'],
    classes['service-item' + '--' + modifier]
  ].join(' ');

  return (
    <li className={itemClassName}>
      <h3 className={classes['service-item__title']}>
        <a
          className={classes['service-item__link']}
          href={href}
        >
          {name}
        </a>
      </h3>
      <p className={classes['service-item__description']}>
        {description}
      </p>
    </li>
  );
}

export default ServiceItem;
