import ServiceItem from './ServiceItem.jsx';
import classes from './Services.module.scss';

const SERVICES = [
  {
    id: 'order',
    name: 'Easy To Order',
    href: '#order-page-content',
    description: 'You only need a few steps in ordering food'
  },
  {
    id: 'delivery',
    name: 'Fastest Delivery',
    href: '#delivery-page-content',
    description: 'Delivery that is always ontime even faster'
  },
  {
    id: 'quality',
    name: 'Best Quality',
    href: '#quality-page-content',
    description: 'Not only fast for us quality is also number one'
  }
];

function Services({ id }) {
  const items = SERVICES.map((service) => (
    <ServiceItem
      key={service.id}
      className={classes.services__item}
      {...service}
    />
  ));

  return (
    <section
      className={classes.services}
      id={id}
    >
      <div className={`${classes.services__wrapper} wrapper`}>
        <h2 className={classes.services__title}>
          What We Serve
        </h2>
        <p className={classes.services__subtitle}>
          Your Favourite Food Delivery Partner
        </p>
        <ul className={classes.services__list} role='list'>
          {items}
        </ul>
      </div>
    </section>
  );
}

export default Services;
