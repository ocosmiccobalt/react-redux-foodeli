import Dropdown from './Dropdown.jsx';
import classes from './SiteList.module.scss';

const WHY_LINK = { name: 'Why Foodeli?', href: '#why' };

const CONTACT_LINK = { name: 'Contact', href: '#contact' };

const SERVICES_LINKS = [
  { name: 'Order', href: '#order-page-content' },
  { name: 'Delivery', href: '#delivery-page-content' },
  { name: 'Quality', href: '#quality-page-content' },
];

const FOODELI_MENU_LINKS = [
  { name: 'Burger', href: '#burger-page-content' },
  { name: 'Pizza', href: '#pizza-page-content' },
  { name: 'Cupcake', href: '#cupcake-page-content' },
  { name: 'Ramen', href: '#ramen-page-content' },
  { name: 'Ice Cream', href: '#ice-cream-page-content' },
];

const DROPDOWNS = [
  { title: 'Services', menuId: 'services-dropdown', links: SERVICES_LINKS },
  { title: 'Menu', menuId: 'menu-dropdown', links: FOODELI_MENU_LINKS }
];

function SiteList({ id, open, navLostFocus }) {
  const subClass = open ? classes['site-list--open'] : '';
  const className = `${classes['site-list']} ${subClass}`;

  const dropdowns = DROPDOWNS.map((d) => (
    <Dropdown
      key={d.menuId}
      className={classes['site-list__item']}
      title={d.title}
      menuId={d.menuId}
      links={d.links}
      navLostFocus={navLostFocus}
    />
  ));

  return (
    <ul
      className={className}
      id={id}
      role='list'
    >
      <li className={classes['site-list__item']}>
        <a
          className={classes['site-list__link']}
          href={WHY_LINK.href}
        >
          {WHY_LINK.name}
        </a>
      </li>
      {dropdowns}
      <li className={classes['site-list__item']}>
        <a
          className={classes['site-list__link']}
          href={CONTACT_LINK.href}
        >
          {CONTACT_LINK.name}
        </a>
      </li>
    </ul>
  );
}

export default SiteList;
