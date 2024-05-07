import Dropdown from './Dropdown.jsx';
import classes from './SiteList.module.scss';

function SiteList({ id, open }) {
  const subClass = open ? classes['site-list--open'] : '';
  const servicesLinks = [
    { name: 'Order', href: '#order-page-content' },
    { name: 'Delivery', href: '#delivery-page-content' },
    { name: 'Quality', href: '#quality-page-content' },
  ];

  const foodeliMenuLinks = [
    { name: 'Burger', href: '#burger-page-content' },
    { name: 'Pizza', href: '#pizza-page-content' },
    { name: 'Cupcake', href: '#cupcake-page-content' },
    { name: 'Ramen', href: '#ramen-page-content' },
    { name: 'Ice Cream', href: '#ice-cream-page-content' },
  ];

  return (
    <ul
      className={`${classes['site-list']} ${subClass}`}
      id={id}
      role='list'
    >
      <li className={classes['site-list__item']}>
        <a
          className={classes['site-list__link']}
          href='#why'
        >
          Why Foodeli?
        </a>
      </li>
      <Dropdown
        className={classes['site-list__item']}
        title='Services'
        menuId='services-dropdown'
        links={servicesLinks}
        navIsClosed={!open}
      />
      <Dropdown
        className={classes['site-list__item']}
        title='Menu'
        menuId='menu-dropdown'
        links={foodeliMenuLinks}
        navIsClosed={!open}
      />
      <li className={classes['site-list__item']}>
        <a
          className={classes['site-list__link']}
          href='#contact'
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default SiteList;
